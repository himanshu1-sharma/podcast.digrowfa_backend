const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const enquirySchema = new Schema({
    personalDetails: {
        fullName: {
            type: String,
            default: null,
            require: true
        },
        email: {
            type: String,
            default: null,
            require: true
        },
        whatsappNumber: {
            type: String,
            default: null,
            minlength: 10
        },
        phoneNumber: {
            type: String,
            default: null,
            minlength: 10
        },
        dob: {
            type: String,
            default: null,
        },
        gender: {
            type: String,
            default: null,
        },
    },

    businessDetails: {
        businessName: {
            type: String,
            default: null,
        },
        businessAge: {
            type: String,
            default: null,
        },
        monthlyRevenue: {
            type: String,
            default: null,
        },
        yearlyRevenue: {
            type: String,
            default: null,
        },
        websiteLink: {
            type: String,
            default: null,
        },
        instagramUsername: {
            type: String,
            default: null,
        },
        youtubeHandle: {
            type: String,
            default: null,
        },
        otherLink: {
            type: String,
            default: null,
        },
        aboutBusiness: {
            type: String,
            default: null,
        },
    },

    otherDetails: {
        address: {
            type: String,
            default: null,
        },
        city: {
            type: String,
            default: null,
        },
        state: {
            type: String,
            default: null,
        },
        pincode: {
            type: String,
            default: null,
        }
    },

    created_ts: {
        type: Date,
        default: Date.now
    }


})

module.exports = mongoose.model("Enquiry", enquirySchema)