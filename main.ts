player.onChat("1", function () {
    agent.teleportToPlayer()
    agent.setItem(OAK_FENCE, 64, 1)
    agent.setAssist(PLACE_ON_MOVE, true)
    agent.setAssist(DESTROY_OBSTACLES, true)
    for (let index = 0; index < 4; index++) {
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 8)
    }
    agent.move(FORWARD, 1)
})
