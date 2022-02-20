<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AllSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $useradmin=User::create([
            'name' => 'admin1',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('admin'),
            'fullaccess' => 'yes',
        ]);
        
        $user1=User::create([
            'name' => 'user1',
            'email' => 'user@gmail.com',
            'password' => Hash::make('user'),
            'fullaccess' => 'no',
        ]);
        
    }
}
