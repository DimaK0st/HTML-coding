<?php
use App\Http\Controllers\BotManController;
use BotMan\BotMan\BotMan;
use BotMan\BotMan\Messages\Attachments\Image;
use BotMan\BotMan\Messages\Outgoing\OutgoingMessage;
use BotMan\Drivers\Slack\SlackDriver;
use Illuminate\Support\Facades\Log;

$botman = resolve('botman');

$botman->hears('Hi', function (BotMan $bot) {
    Log::info('', [$bot->getUser()->getInfo()]);


    $attachment = new Image('https://botman.io/img/logo.png');

    $message = OutgoingMessage::create('This is my text')
        ->withAttachment($attachment);

    $bot->reply($message);

    // Отправьте сообщение в Slack канал
    $bot->sendRequest('chat.postMessage', [
        'channel' => '#general', // Замените на имя канала, куда вы хотите отправить сообщение
        'text' => $message->getText(),
    ]);
    Log::info('', [$bot->getMessage()->getPayload()]);
    dd($bot->getMessage()->getPayload());
    $attachment = new Image('https://botman.io/img/logo.png');

    $message = OutgoingMessage::create('This is my text')
                ->withAttachment($attachment);


    Log::info('', $bot->driver('slack')
        ->sendRequest('chat.postMessage', [
            'channel' => '#channel_name', // Замените на имя канала, куда вы хотите отправить сообщение
            'text' => $message->getText(),
        ]));

    $bot->reply($message);

    $bot->reply('Hello!');
});
$botman->hears('Start conversation', BotManController::class.'@startConversation');
$botman->hears('keyword', function($bot) {
    $bot->reply('I heard you! :)');
});