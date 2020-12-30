//account create
//deposit
//withdraw
//balance enquiry
class Bank{
    static bankname=()=>{
        console.log("SBI bank")
    }
    accountCreate=(acno,name,mini_balance)=>{
this.acno=acno;
this.name=name;
this.mini_balance=mini_balance;
    }

    deposit=(amount)=>{
        this.mini_balance+=amount
        console.log("your account"+this.acno+"has been credited with amount"+amount+"available balnce is"+this.mini_balance)

    }
    withdraw=(amount)=>{
        if(this.mini_balance>=amount){
        this.mini_balance-=amount
        console.log("your account"+this.acno+"has been debited with amount"+amount+"available balnce is"+this.mini_balance)
        }
        else{
            console.log("insufficient balnce")
        }
        }

        balanceenq=()=>{
           console.log(this.mini_balance)
        }

    }

var obj=new Bank()
obj.accountCreate(11112,"ajay",500)
obj.deposit(1000)
obj.withdraw(700)
obj.balanceenq()
Bank.bankname()



