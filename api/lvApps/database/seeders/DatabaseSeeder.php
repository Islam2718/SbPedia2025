<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'username' => 'SystemAdmin',
            'email' => 'system@mail.com',
            // 'type' => 'SUPERADMIN',
            'password' => bcrypt(123456),
        ]);

        \App\Models\Siteinfo::factory()->create([
            'name' => 'AAA Trade International',
            'title' => 'AAA Trade',
            'description' => '',
            'logo_header' => 'Super',
            'logo_footer' => '',
            'map_html' => '',
            'email' => 'info@aaatradeinternational.com',
            'phone' => '+880 0000 000000',
            'address' => 'Dhaka-1298'
        ]);
    }
}
