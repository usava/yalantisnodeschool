// Warrior class
class Warrior {
    constructor(name, attackType, hp){
        this.name = name;
        this.attackType = attackType;
        this.hp = hp;
    }

    attack() {
        let value = this.luckyStike(1, 10);
        console.log(this.name + ' attack ' + value);
        return value;
    }

    luckyStike(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);//truly random integer
        rand = Math.round(rand);
        return rand;
    }

}

class Gladiator extends Warrior {

}

class Monster extends Warrior {

}

class Game {
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
        this.winner = '';
    }

    start(){
        while(this.player1.hp > 0 && this.player2.hp > 0){
            const player1Luck = this.player1.luckyStike(0, 1);

            //random start attack for fair
            if(player1Luck){
                this.player2.hp -= this.player1.attack();
            } else {
                this.player1.hp -= this.player2.attack();
            }
        }
        this.winner = (this.player1.hp>0) ? this.player1.name : this.player2.name;

        return this.winner;
    }
}

const gladiator = new Gladiator('Sviat', 'melee', 10);
const monster = new Gladiator('Vasilisk', 'melee', 10);
const game = new Game(gladiator, monster);
console.log('Battle begins:');
game.start();
console.log('Winner ' + game.winner + '!');