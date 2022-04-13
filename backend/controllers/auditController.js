const Audit = require('../models/audit')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

exports.getAllAudits = catchAsyncErrors(async (req, res, next) => {
    const audits = await Audit.find()
    // const resPerPage = 5
    // .pagination(resPerPage)
    res.status(200).json({
        success: true,
        audits
    })
})