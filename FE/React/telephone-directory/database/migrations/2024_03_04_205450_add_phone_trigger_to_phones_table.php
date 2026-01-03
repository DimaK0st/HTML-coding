<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Migrations\Migration;

class AddPhoneTriggerToPhonesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::unprepared('
            CREATE TRIGGER update_phone_field
            BEFORE INSERT ON phones
            FOR EACH ROW
            BEGIN
                DECLARE region_value VARCHAR(255);
                SELECT region INTO region_value FROM regions WHERE id = NEW.region_id;
                SET NEW.phone = CONCAT("+380", region_value, NEW.digital);
            END;
        ');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::unprepared('DROP TRIGGER IF EXISTS update_phone_field');
    }
}
