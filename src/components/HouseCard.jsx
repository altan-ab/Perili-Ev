const HouseCard = ({ houseData, index, array }) => {
  const features = [
    { label: 'Fiyat', value: houseData.price },
    { label: 'Lokasyon', value: houseData.location },
    { label: 'Metrekare', value: houseData.squareFeet },
    { label: 'Dönüm', value: houseData.acres },
    { label: 'Yapım Yılı', value: houseData.yearBuilt },
    { label: 'Yatak Odası', value: houseData.bedrooms },
    { label: 'Banyo', value: houseData.bathrooms },
    { label: 'Diğer Odalar', value: houseData.otherRooms },
    { label: 'Garaj', value: houseData.garage ? true : false },
    { label: 'Klima', value: houseData.airConditioning ? true : false },
    { label: 'Isıtma Sistemi', value: houseData.heating ? true : false },
    { label: 'Lanetli', value: houseData.haunted ? true : false },
  ]

  return (
    <div className="house-card" key={houseData.id}>
      <p>
        {array.length} / {index + 1}
      </p>
      <img src={houseData.image} />
      <div>
        <ul>
          {features.map((feature) => (
            <li key={crypto.randomUUID()}>
              <span>{feature.label}:</span> {feature.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default HouseCard

/* 
Tek tek li yazmak yerine features dizisini dinamik olarak oluşturdum. 
Bu yöntem, özelliklerin sayısı arttığında ya da verinin yapısı değiştiğinde her birini elle yazmaktan kurtarır ve kodu daha temiz, dinamik ve kolay bakımı yapılabilir hale getirir.
*/
/*
 <li>
            <span>Fiyat:</span>
            {houseData.price}
          </li>
          <li>
            <span>Lokasyon:</span>
            {houseData.location}
          </li>
          <li>
            <span>Metrekare:</span>
            {houseData.squareFeet}
          </li>
          <li>
            <span>Dönüm:</span>
            {houseData.acres}
          </li>
          <li>
            <span>Yapım Yılı:</span>
            {houseData.yearBuilt}
          </li>
          <li>
            <span>Yatak Odası:</span>
            {houseData.bedrooms}
          </li>
          <li>
            <span>Banyo:</span>
            {houseData.bathrooms}
          </li>
          <li>
            <span>Diğer Odalar:</span>
            {houseData.otherRooms}
          </li>
          <li>
            <span>Garaj:</span>
            {houseData.garage ? 'Evet' : 'Hayır'}
          </li>
          <li>
            <span>Klima:</span>
            {houseData.airConditioning ? 'Evet' : 'Hayır'}
          </li>
          <li>
            <span>Isıtma Sistemi:</span>
            {houseData.heating ? 'Evet' : 'Hayır'}
          </li>
          <li>
            <span>Lanetli:</span>
            {houseData.haunted ? 'Evet' : 'Hayır'}
          </li>

 */
