<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class RememberMailable extends Mailable
{
    use Queueable, SerializesModels;

    public $subject = 'Nuestros amigos de Patitas felices estamos contentos; ¡Gracias por contar con nosotros!';
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.remembermailable1');
    }
}