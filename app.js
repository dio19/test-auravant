
function clickHandler() {
  return ( window.location.href = "#products", fetch("https://api.mocki.io/v1/0a9cd191").then(res => {
    res.json().then(data => {
      if (data.data?.length > 0) {
        const products = data.data.filter(product => {
          return product.type !== 'bakery'
        })
        let temp = ''
        const titles = []
        for (let i = 0; i < products.length; i++) {
          if (titles.includes(products[i].title)){
            i++
          } else {
            titles.push(products[i].title)
            if(products[i].type == 'fruit'){
              temp += '<tr class="active-row">'
            } else {
              temp += '<tr>'
            }
            temp += '<td>' + products[i].title + '</td>'
            temp += '<td>' + products[i].type + '</td>'
            temp += '<td>' + products[i].price + '</td>'
            temp += '<td>' + products[i].rating + '</td></tr>'
          }
        }
        document.getElementById("data").innerHTML = temp
      }
    })
  })
  )
}