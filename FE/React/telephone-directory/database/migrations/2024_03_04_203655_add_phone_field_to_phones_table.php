<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class AddPhoneFieldToPhonesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('phones', function (Blueprint $table) {
            // Добавляем поле phone
            $table->string('phone')->nullable();
        });

        // Обновляем значение поля phone для существующих записей
        DB::table('phones')

            ->join('regions', 'phones.region_id', '=', 'regions.id')
            ->update([
            'phone' => DB::raw('CONCAT("+380", regions.region, digital)')
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('phones', function (Blueprint $table) {
            // Удаляем поле phone
            $table->dropColumn('phone');
        });
    }
}
