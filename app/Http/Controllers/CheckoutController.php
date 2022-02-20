<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CheckoutController extends Controller
{
    public function checkout()
    {   
        // Enter Your Stripe Secret
        \Stripe\Stripe::setApiKey('sk_test_51Izx7SJb3Rvkd5Jww1MRMqIzVIZkTgSLfr87FdTLBMurrz73TgaRSIbM13Xh6vQhdPJ5odUGAlnEozbqrsMVuKHS00RDlPMD2a');
        		
		$amount = 20;
		$amount *= 100;
        $amount = (int) $amount;
        
        $payment_intent = \Stripe\PaymentIntent::create([
			'description' => 'Stripe Test Payment',
			'amount' => $amount,
			'currency' => 'MXN',
			'description' => 'Donacion',
			'payment_method_types' => ['card'],
		]);
		$intent = $payment_intent->client_secret;

		return view('checkout.credit-card',compact('intent'));

    }

    public function afterPayment()
    {
        // echo 'La Donacion Ha ido Recibida, Muchas Gracias Por Apoyarnos!!!';
        return view('donationtnk');
    }
}