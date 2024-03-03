import constant from "../utils/constant";

const CardsItems = (Itemdata)=>{
    console.log("item data is : ")
    console.log(Itemdata);
    return(
        <div>
        {Itemdata.items.map((val) => {
            return (
              <div className="p-5 bg-slate-200 m-5 shadow-lg rounded-md flex justify-between gap-6">
                <div className="w-[500px]">
                  <h2 className="font-bold text-base">{val.card.info.name}</h2>
                  <h3>
                    Rs-
                    {val.card.info.price
                      ? val.card.info.price / 100
                      : val.card.info.defaultPrice / 100}
                  </h3>
                  <p>{val.card.info.description}</p>
                </div>
                <div >
                    <img src={constant.CDN_URL + val.card.info.imageId } className="w-[150px] h-[100px] rounded-lg" alt="Loading.." />
                    <button className="bg-black text-white w-14 border border-black rounded-lg">Add +</button>
                </div>
              </div>
            );
          })}
          </div> 
    );
}
export default CardsItems;