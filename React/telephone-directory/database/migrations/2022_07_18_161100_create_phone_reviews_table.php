<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePhoneReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('phone_reviews', function (Blueprint $table) {
            $table->id();
            $table->foreignId('number_id')->constrained('phone_numbers');
            $table->string('review')->nullable();
            $table->integer('ratingLine')->nullable();
            $table->integer('ip')->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('phone_reviews');
    }
}
