document.getElementById("hidencart").style.display="none";
document.getElementById("showcart").style.display="none";
var giohang = new Array();

        function themvaogiohang(x) {
            var boxsp = x.parentElement.children;
            var hinh = boxsp[0].src;
            var tensp = boxsp[1].innerText;
            var gia = boxsp[2].innerText;
            var soluong = parseInt(boxsp[4].value);// chuyen ve so
            var sp = new Array(hinh,  tensp,gia, soluong);
            //kiểm tra giỏ hàng
            //Nếu trùng sp thì tăng số lượng
            var kt=0;
            for(let i=0;i<giohang.length;i++){
                if(giohang[i][1]==tensp){
                    kt=1;
                    soluong += parseInt(giohang[i][3]);
                    giohang[i][3]=soluong;
                    break;
                }
            }
            if(kt==0){
                //add cart
            giohang.push(sp);
            }
            

            /* console.log(giohang); */
            showcountsp();

            //Lưu giá trị lên sesionStorage
            sessionStorage.setItem("giohang",JSON.stringify(giohang));
        }
        
        function showcountsp() {
            document.getElementById("countsp").innerHTML = giohang.length;
        }

        function showmycart(){
            var ttgh="";
            var tong=0;
            for(var i =0;i<giohang.length;i++){
                var tt=parseInt(giohang[i][2])*parseInt(giohang[i][3]);
                tong+=tt;
                ttgh+='<tr>'+
                    '<td>'+(i+1)+'</td>'+
                    '<td><img src="'+giohang[i][0]+'" alt=""></td>'+
                    '<td>'+giohang[i][1]+'</td>'+
                    '<td>'+giohang[i][2]+'</td>'+
                    '<td>'+giohang[i][3]+'</td>'+
                    '<td>'+
                    '<div>'+tt+'</div>'+
                    '<td>'+
                    '<button onclick="xoasp(this)">Xóa</button>'+
                    '</td>'+
                    '</td>'+
                                '</tr>'
            }
            ttgh+='<tr>'+
                '<th colspan="5">Tổng đơn hàng</th>'+
                '<th>'+
                '<div>'+tong+''+'$'+'</div>'+
                '</th>'+
                '<th>'+
                '<button onclick="xoatatca()">Xóa Tất Cả</button>'+
                '</th>'+
               '</tr>'+
               

               '<tr>'+
                    '<th colspan="7">'+
                    '<a href="./cart.html" class="showpagecart">Thanh Toán</a>'+     
                    '</th>'+
                '</tr>';
               
            document.getElementById("mycart").innerHTML=ttgh;
        
         }

 function showcart(){
    var x =document.getElementById("showcart");
    var y=document.getElementById("hidencart");
    if (giohang.length==0){
       
        if(y.style.display=="none"){
            y.style.display="flex";
        }
        else{
            y.style.display="none";
        }
    }
    else { 
        if(x.style.display=="none"){
            x.style.display="block";
        }
        else{
            x.style.display="none";
        }
    }

   /*   */
    showmycart();
    
    
 }
 function closeeven(){
    document.getElementById("showcart").style.display="none";
}
 function showgiohang__trangthanhtoan(){
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var ttgh="";
    var tong=0;
    for(let i =0;i<giohang.length;i++){
        var tt=parseInt(giohang[i][2])*parseInt(giohang[i][3]);
        tong+=tt;
        ttgh+='<tr>'+
            '<td>'+(i+1)+'</td>'+
            '<td><img src="'+giohang[i][0]+'" alt=""></td>'+
            '<td>'+giohang[i][1]+'</td>'+
            '<td>'+giohang[i][2]+'</td>'+
            '<td>'+giohang[i][3]+'</td>'+
            '<td>'+
            '<div>'+tt+'</div>'+
            '</td>'+
                        '</tr>'
    }
    ttgh+='<tr>'+
        '<th colspan="5">Tổng đơn hàng</th>'+
        '<th>'+
        '<div>'+tong+''+'$'+'</div>'+
        '</th>'+
       '</tr>';
    document.getElementById("mycart").innerHTML=ttgh;
}
// Ham xoa san pham
function xoasp(x){
    var tr=x.parentElement.parentElement;
    var tensp=tr.children[2].innerText;
    //Delete tr
    tr.remove();
    //Delete item
    for(var i=0;i<giohang.length;i++)
    {
        if(giohang[i][1]==tensp){
            giohang.splice(i,1);//splice xoa phan tu trong mang
        }
    }
    showmycart();
    showcountsp();// cap nhat lai so dem tren gio
    
}
//Xoa tat ca
function xoatatca(){
    giohang=[];
    showmycart();
    showcountsp();
}