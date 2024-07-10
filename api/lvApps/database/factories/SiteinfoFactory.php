<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Siteinfo>
 */
class SiteinfoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'name' => fake()->name(),
            'title' => fake()->name(),

            'description' => fake()->name(),
            'logo_header' => fake()->name(),
            'logo_footer' => fake()->name(),
            'map_html' => fake()->name(),
            'email' => fake()->name(),
            'phone' => fake()->name(),
            'address' => fake()->name(),
            'status' => 0
        ];
    }
}
