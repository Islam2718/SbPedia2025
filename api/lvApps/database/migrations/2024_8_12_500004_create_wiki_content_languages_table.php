<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wiki_content_languages', function (Blueprint $table) {
            $table->id();
            $table->biginteger('wiki_content_id')->nullable();
            $table->biginteger('setting_language_id')->nullable();
            $table->string('title')->nullable();
            $table->string('name')->nullable();
            $table->text('content')->nullable();            
            $table->integer('is_default')->default(0);
            $table->biginteger('created_by')->nullable();
            $table->biginteger('updated_by')->nullable();
            $table->string('status')->default('pending');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wiki_content_languages');
    }
};
