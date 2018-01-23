<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Models\Item::class, function (Faker $faker) {
    return [
        'name' => $faker->name,

        'vendor' => $faker->company,
        'model' => $faker->languageCode,
        'memo' => $faker->text,
        'status' => $faker->colorName,
        'user' => $faker->firstName,
        'location' => $faker->streetName,
        'quantity' => $faker->numberBetween(1, 10),
        'purchased_at' => $faker->dateTime,
    ];
});
