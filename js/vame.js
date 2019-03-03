new Vue({
    el: '#app',
    data: {
        playerAttackPower: 0,
        playerDefensePower: 0,
        playerHealt: 0,
        playerMaxHealt: 0,
        enemyAttackPower: 0,
        enemyDefensePower: 0,
        enemyHealt: 0,
        enemyMaxHealt: 0
    },
    methods: {
        d20: function(){
            return Math.floor(Math.random() * 20) + 1;
        },
        newGame: function(){
            this.playerAttackPower = this.d20();
            this.playerDefensePower = this.d20();
            this.playerHealt = this.d20() * 5;
            this.playerMaxHealt = this.playerHealt;
            this.enemyAttackPower = this.d20();
            this.enemyDefensePower = this.d20();
            this.enemyHealt = this.d20() * 5;
            this.enemyMaxHealt = this.enemyHealt;
        },
        playerAttack: function(){
            if (this.enemyHealt > 0) {
                this.enemyHealt -= this.playerAttackPower;
                (this.enemyAction() == 1) ? this.enemyAttack() : this.enemyDefense();
            }
            this.healtController();
        },
        playerDefense: function(){
            this.healtController();
            if (this.enemyAction == 1) {
                this.playerHealt -= this.enemyAttackPower - this.playerDefensePower;
            } else {
                this.playerHealt -= (this.playerDefensePower + this.enemyDefensePower) / 2;
                this.enemyHealt -= (this.playerDefensePower + this.enemyDefensePower) / 2;
            }
            this.healtController();
            
        },
        enemyAttack: function(){
            if (this.playerHealt > 0) {
                this.playerHealt -= this.enemyAttackPower;
                this.healtController();
            } else {
                alert("You Lost");
            }
        },
        enemyDefense: function(){
            this.healtController();
            this.enemyHealt -= this.enemyDefensePower - this.playerAttackPower;
            this.healtController();
        },
        enemyAction: function(){
            return Math.floor(Math.random() * 2) + 1;
        },
        healtController: function(){
            if (this.enemyHealt < 0) {
                alert("You Win!");
            } else if (this.playerHealt < 0){
                alert("You Lost!");
            }
        }

    }
});