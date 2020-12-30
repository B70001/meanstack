class parent{
m1=()=>{
    console.log("inside parent")
}

}

class child extends parent{
    m2=()=>{
        console.log("inside child")
    }
    
    }
    class subchild extends child{
        m3=()=>{
            console.log("inside subchild")
        }
        
        }
        var sb=new subchild
        sb.m3()
        sb.m2()
        sb.m1()
        var ch=new child
        ch.m2()
        ch.m1()
        var pr=new parent
        pr.m1()
            

        
        