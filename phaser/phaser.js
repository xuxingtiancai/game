技术-html5游戏&phaser
快速搭建http服务器
python -m SimpleHTTPServer 8080

键盘事件
winButton = game.input.keyboard.addKey(Phaser.Keyboard.B);
if (winButton.isDown)

overlap事件
game.physics.arcade.overlap(enemyBullets, player, enemyHitsPlayer, null, this);
function enemyHitsPlayer(player, bullet) 
ps: sprite vs group, 响应函数参数始终sprite在前

边界处理
    if (player.body.x < 0)
    {
        player.body.x = 0;
    }
    if (player.body.x > game.world.width - player.body.width)
    {
        player.body.x = game.world.width - player.body.width;
    }
    if (player.body.y < 0)
    {
        player.body.y = 0;
    }
    if (player.body.y > game.world.height - player.body.height)
    {
        player.body.y = game.world.height - player.body.height;
    }

使用reset代替直接赋值
function player_reset() {
    //rePostion
    player.reset(400 - player.body.width, 500 - player.body.height);
}
