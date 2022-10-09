<?php

namespace App\Domain\Phone\Services;

use App\Domain\Phone\Repositories\PhoneRepository;
use App\Domain\Region\Services\RegionService;
use App\Models\Phone;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class PhoneService
{
    public function __construct(private PhoneRepository $phoneRepository, private RegionService $regionService)
    {
    }

    /**
     * @param string $phone
     * @return Builder|Model|object|null
     */
    public function getPhone(string $phone)
    {
        if (!$validatePhone = $this->getRegionAndDigitals($phone)) {
            return null;
        }

        if (!$phone = $this->phoneRepository->getPhone($validatePhone['region'], $validatePhone['digital'])) {
            return $this->phoneRepository->getPhoneById($this->createNewPhone($validatePhone['region'], $validatePhone['digital'])->id);
        }

        return $phone;
    }

    /**
     * @param string $region
     * @param string $digital
     * @return Phone|null
     */
    public function createNewPhone(string $region, string $digital): ?Phone
    {
        if ($regionObj = $this->regionService->getOrCreateRegion($region)) {
            $phone = new Phone();
            $phone->region_id = $regionObj->id;
            $phone->digital = $digital;
            $phone->save();
            return $phone;
        }

        return null;
    }

    /**
     * @param string $phone
     * @return array|null
     */
    private function getRegionAndDigitals(string $phone)
    {
        if (strlen($phone) > 13 || strlen($phone) < 9) {
            return null;
        }

        $pattern = '/(\+380|)(\d{9}$)/';

        preg_match($pattern, $phone, $matchesOne);
        $fullPhone = array_pop($matchesOne);

        if (strlen($fullPhone) === 9) {
            return [
                'region' => substr($fullPhone, 0, 2),
                'digital' => substr($fullPhone, 2),
            ];
        } else {
            return null;
        }
    }

    /**
     * @return array
     */
    public function getCarouselCommentsForMainPage()
    {
        return [
            'positive' => $this->phoneRepository->getCarouselCommentsByType('positive'),
            'negative' => $this->phoneRepository->getCarouselCommentsByType('negative'),
        ];
    }

}
