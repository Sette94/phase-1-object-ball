
function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

const gameData = gameObject();
console.table(gameData);


function numPointsScored(player) {
    for (let parentTeams in gameData) {
        let playerObject = gameData[parentTeams].players[player]

        // If the player is not on that team then go to the next team
        if (playerObject) {
            return playerObject.points
        }
    }
}

function shoeSize(playerParam, statParam) {
    for (let parentTeams in gameData) {
        let playerObject = gameData[parentTeams].players[playerParam]
        // If the player is not on that team then go to the next team
        if (playerObject) {
            return playerObject[statParam]
        }
    }
}

function teamColors(team) {
    for (parentTeams in gameData) {
        let teamVal = gameData[parentTeams].teamName
        if (teamVal == team) {
            return gameData[parentTeams].colors
        }
    }
}

function teamNames(obj) {
    let teamNameArr = []
    for (parentTeams in obj) {
        let teamVal = gameData[parentTeams].teamName
        if (teamVal) {
            teamNameArr.push(teamVal)
        }
    }
    return teamNameArr
}

function playerNumbers(team, statParam) {
    let numbersArr = []
    for (parentTeams in gameData) {
        let teamVal = gameData[parentTeams].teamName
        if (teamVal == team) {
            let playerObject = gameData[parentTeams].players
            for (players in playerObject) {
                if (playerObject[players]) {
                    numbersArr.push(playerObject[players][statParam])
                }
            }
        }
    }
    return numbersArr
}


let player = 'Brook Lopez'
let stat = 'number'
let team = "Brooklyn Nets"

// console.log(teamColors(team))
// console.log(shoeSize(player, stat))
// console.log(teamNames(gameData))
// console.log(playerNumbers(team, stat))

