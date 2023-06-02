const Enquiry = require("../models/Enquiry.model")

exports.enquiry = async (req, res) => {
    try {
        let {
            fullName,
            email,
            whatsappNumber,
            phoneNumber,
            dob,
            gender,
            businessName,
            businessAge,
            monthlyRevenue,
            yearlyRevenue,
            websiteLink,
            instagramUsername,
            youtubeHandle,
            otherLink,
            aboutBusiness,
            address,
            city,
            state,
            pincode
        } = req.body;
        let emailExist = await Enquiry.findOne({ email: email })
        if (emailExist) return res.status(200).json({
            errorcode: 2,
            status: false,
            message: "Email Already exists",
            data: null
        })
        let enquires = new Enquiry({
            personalDetails: {
                fullName,
                email,
                whatsappNumber,
                phoneNumber,
                dob,
                gender,
            },
            businessDetails: {
                businessName,
                businessAge,
                monthlyRevenue,
                yearlyRevenue,
                websiteLink,
                instagramUsername,
                youtubeHandle,
                otherLink,
                aboutBusiness,
            },
            otherDetails: {
                address,
                city,
                state,
                pincode
            }
        })
        enquires = await enquires.save()
        return res.status(201).json({
            errorcode: 0,
            status: true,
            message: "enqury submitted",
            data: enquires
        })
    } catch (error) {
        console.log(error)
        return res.status(204).json({
            errorcode: 5,
            status: false,
            message: error.message,
            data: error
        })
    }
}


exports.getAllEnquires = async (req, res) => {
    try {
        let enquiresList = await Enquiry.find({}).sort({ created_ts: -1 })
        return res.status(200).json({
            errorcode: 0,
            status: true,
            message: "Get all enquires successfully",
            data: enquiresList
        })
    } catch (error) {
        return res.status(204).json({
            errorcode: 5,
            status: false,
            message: error.message,
            data: error
        })
    }
}