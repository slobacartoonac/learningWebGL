function Player(value)
{
NamedObject.call(this,value);
}

Player.prototype=Object.create(NamedObject.prototype);
Player.prototype.constructor= Player;


