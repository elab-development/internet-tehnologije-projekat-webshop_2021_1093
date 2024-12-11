<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::truncate();

        User::factory(5)
            ->has(Customer::factory(3)
                ->has(Order::factory(3)
                    ->has(Product::factory(4))))
            ->create();
    }
}
