import Hotel from "../models/Hotel.js"


export const  createHotel = async( req , res)=>{
    const newHotel = new Hotel(req.body)
    try{
        const savedHotel = await newHotel.save()
        res.status(200).send( savedHotel)

    }catch(err){
        res.status(500).json(err)
    }

}

export const updateHotel = async( req , res)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate( req.params.id , {$set:req.body},{returnDocument: 'after'})
        res.status(200).send( updatedHotel)

    }catch(err){
        res.status(500).json(err)
    }

}

export const deleteHotel = async( req , res)=>{
    try{
        await Hotel.findByIdAndDelete( req.params.id )
        res.status(200).send( 'Hotel has been deleted.')

    } catch(err){
        res.status(500).json(err)
    }

}

export const getHotel = async( req , res)=>{
    try{
        const hotel = await Hotel.findById( req.params.id )
        res.status(200).send( hotel)

    }catch(err){
        res.status(500).json(err)
    }

}

export const getHotels = async( req , res , next)=>{
    const { city , min, max, limit , ...others } = req.query 
    try{
        const hotels = await Hotel.find({
            ...others, 
            city: { $regex: new RegExp(city, "i") }, // "i" = case-insensitive
            cheapestPrice:{$gt:min ||1 ,$lt:max || 9999}
        }).limit(req.query.limit )
        res.status(200).send( hotels)

    }catch(err){
        res.status(500).json(err)
    }

}

export const countByCity = async( req , res , next)=>{
    const cities = req.query.cities.split(",")
    try{
        const list = await Promise.all( cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)

    }catch(err){
        res.status(500).json(err)
    }

}

export const countByType = async( req , res , next)=>{
    try{
        const hotelCount = await Hotel.countDocuments({type:"hotel"})
        const apartmentCount = await Hotel.countDocuments({type:"apartment"})
        const resortCount = await Hotel.countDocuments({type:"resort"})
        const villaCount = await Hotel.countDocuments({type:"villa"})
        const cabinCount = await Hotel.countDocuments({type:"cabin"})

        res.status(200).json([
            { type: "hotel" ,count: hotelCount },
            { type: "apartment" ,count: apartmentCount },
            { type: "resort" ,count: resortCount },
            { type: "villa" ,count: villaCount },
            { type: "cabin" ,count: cabinCount },
            
        ])

    }catch(err){
        res.status(500).json(err)
    }

}