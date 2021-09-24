the beginnings of a online coop deckbuilder

the general idea is to have all the game logic take place on the server, events will be sent to clients using websockets and will be displayed on the clients.
sometimes the server will send events that require input from clients, these will be be promises in the game logic that are resolved once a valid repsonse has been received from the prompted client.

Gameplay wise it will be as simple as possible, basically slay the spire because that is pretty much as simple as it gets. once I have a working foundation I might do some cool stuff.

The initial game state will be for character creation, this will be a waiting lobby where players can join. any player who joins after the game has already started will be able to download a replay of the game until now to catch up and spectate, or if they were in the game at the start - resume playing