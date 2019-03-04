new Vue({
    el: '#app',
    data: {
        playerAttackPower: 0,
        playerDefensePower: 0,
        playerhealth: 0,
        playerMaxhealth: 0,
        enemyAttackPower: 0,
        enemyDefensePower: 0,
        enemyhealth: 0,
        enemyMaxhealth: 0
    },
    methods: {
        d20: function(){
            return Math.floor(Math.random() * 20) + 1;
        },
        newGame: function(){
            this.playerAttackPower = this.d20();
            this.playerDefensePower = this.d20();
            this.playerhealth = this.d20() * 5;
            this.playerMaxhealth = this.playerhealth;
            this.enemyAttackPower = this.d20();
            this.enemyDefensePower = this.d20();
            this.enemyhealth = this.d20() * 5;
            this.enemyMaxhealth = this.enemyhealth;
        },
        playerAttack: function(){
            if (this.enemyhealth > 0) {
                this.enemyhealth -= this.playerAttackPower;
                (this.enemyAction() == 1) ? this.enemyAttack() : this.enemyDefense();
            }
            this.healthController();
        },
        playerDefense: function(){
            this.healthController();
            if (this.enemyAction == 1) {
                this.playerhealth -= this.enemyAttackPower - this.playerDefensePower;
            } else {
                this.playerhealth -= (this.playerDefensePower + this.enemyDefensePower) / 2;
                this.enemyhealth -= (this.playerDefensePower + this.enemyDefensePower) / 2;
            }
            this.healthController();
            
        },
        enemyAttack: function(){
            if (this.playerhealth > 0) {
                this.playerhealth -= this.enemyAttackPower;
            }
        },
        enemyDefense: function(){
            if (this.playerhealth > 0) {
                this.enemyhealth -= this.enemyDefensePower - this.playerAttackPower;
            }
        },
        enemyAction: function(){
            return Math.floor(Math.random() * 2) + 1;
        },
        healthController: function(){
            if (this.enemyhealth < 0) {
                alert("You Win!");
            } else if (this.playerhealth < 0){
                alert("You Lost!");
            }
        }

    }
});