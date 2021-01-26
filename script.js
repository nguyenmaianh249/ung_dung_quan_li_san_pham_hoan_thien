var product1 = {
    product_name: 'Samsung',
    manufacture_name: 'Hàn Quốc',
    category_name: 'iPhone5s',
    price: 5,
    quantity: 10,
    totalprice: 50
}
var product2 = {
    product_name: 'Oppo',
    manufacture_name: 'Trung Quốc',
    category_name: 'oppo',
    price: 6,
    quantity: 10,
    totalprice: 60
}

let products_list = [product1, product2]

function show_product() {
    let header = `<tr>
        <th> Product name </th> 
        <th> Manufacture name </th> 
        <th> Category name </th> 
        <th> Price </th> 
        <th> Quantity </th> 
        <th> Total Price </th> 
        <th> </th> 
        <th> </th> 
        </tr>`
    let table_content = header
    for (i = 0; i < products_list.length; i++) {
        let product_row = `<tr>
                           <td>` + products_list[i].product_name + `</td>
                           <td>` + products_list[i].manufacture_name + `</td> 
                           <td>` + products_list[i].category_name + `</td> 
                           <td> ` + products_list[i].price + `</td> 
                           <td>` + products_list[i].quantity + `</td> 
                           <td>` + products_list[i].totalprice + `</td> 
                           <td><button onclick = "editProduct(` + i + `)">Edit</td> 
                           <td><button onclick = "deleteProduct(` + i + `)">Delete</button></td> 
                           </tr>`;
        table_content += product_row
    }
    document.getElementById("product_table").innerHTML = table_content
}

function deleteProduct(index) {
    var option = confirm("Bạn có chắc chắn muốn xóa sản phẩm không ?")
    if (!option) {
        return
    }
    products_list.splice(index, 1)
    show_product()
}
var count = 0;

function btn_add_newproduct() {
    let productName = document.getElementById("product_name").value;
    let manufactureName = document.getElementById("manufacture_name").value;
    let categoryName = document.getElementById("category_name").value;
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;
    let totalprice = document.getElementById("totalprice").value;
    let product = {
        product_name: productName,
        manufacture_name: manufactureName,
        category_name: categoryName,
        price: parseInt(price),
        quantity: parseInt(quantity),
        totalprice: parseInt(totalprice),
    }
    console.log(product)
    products_list.push(product)

    show_product()
}

function editProduct(index) {
    new_product_name = document.getElementById("product_name").value
    new_manufacture_name = document.getElementById("manufacture_name").value
    new_category_name = document.getElementById("category_name").value
    new_price = document.getElementById("price").value
    new_quantity = document.getElementById("quantity").value
    new_totalprice = document.getElementById("totalprice").value
    new_product = {
        product_name: new_product_name,
        manufacture_name: new_manufacture_name,
        category_name: new_category_name,
        price: parseInt(new_price),
        quantity: parseInt(new_quantity),
        totalprice: parseInt(new_totalprice)
    }
    products_list[index] = new_product
    show_product()
}