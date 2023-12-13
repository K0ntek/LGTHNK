const [productsInBag, setProducts] = useState([])
const addToBag = (product) =>{
    const newProduct = {...product}
    setProducts([...productsInBag, newProduct])
}