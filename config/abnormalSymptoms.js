const abnormalSymptoms = require('../model/abnormalSymptoms');

// Show the list of Abnormal Symptoms To Doctor.
const index = (req, res, next) => {
    abnormalSymptoms.find({doctorID : doctorID})
    .then(response => {
    res.json({
    response
    })  
})
    .catch(error => {
        res.json({
            message: 'An error Occured!'
        })
    })
}

//Show an Abnormal Symptoms By patient Name To Doctor.
const show = (req, res, next) => {
    let patientName = req.body.patientName
    abnormalSymptoms.find({patientName:patientName})
    .then(response => {
    res.json({
    response
})
})
    .catch(err => {
        message : 'An error occurred'
})

}
//Add Abnormal Symptoms By Patient.
const store = (req, res, next) => { 
    let AbnormalSymptoms = new abnormalSymptoms({
        doctorID : req.body.doctorID,
        patientID : req.body.patientID,
        abnormalsymptoms: req.body.abnormalsymptoms,
        patientName: req.body.patientName,
        doctorName: req.body.doctorName
 
    })

       AbnormalSymptoms.save()
        .then(response => {
            res.json({
                AbnormalSymptoms,
                message: `Abnormal Symptoms Info. Added Successfully!!!...Doctor Will Update Doctor\'s Instructions And Notes Field As Soon As Possible...Please Check This Field Continusley...Thank's...
                `
        })
    })
        .catch(error =>{
            res.json({
                message:'An error occurred!!!' + error
        })
    })
    
    }
// message:'You Enterd Abnormal Symptoms Once And Doctor Still Not Check It So You Can Not Add More For Now...!!!' + error,


//Update Abnormal Symptoms By Patient.
const updateInfo = (req, res, next) => { 
    let ID = req.body.ID

    
    let updatedData = {
        abnormalsymptoms: req.body.abnormalsymptoms || abnormalSymptoms.abnormalsymptoms,
        patientName: req.body.patientName || abnormalSymptoms.patientName,
        doctorName: req.body.doctorName || abnormalSymptoms.doctorName
    }
    
    abnormalSymptoms.findByIdAndUpdate(ID, {$set: updatedData})
    .then(() => {
    res.json({
        message: 'Abnormal Symptoms Info. updated successfully!'
        })
    })
        .catch(error => {
            res.json({
                message: 'An error Occured!'
        })
    })
    }
//Delete Abnormal Symptoms By Doctor After Checking It. 

const destroy = (req, res, next) => { 
    let patientID = req.body.patientID
    abnormalSymptoms.findByIdAndRemove(patientID)
.then(() => {
    res.json({
        message: 'Abnormal Symptoms Deleted successfully!!!'
    })
})
    .catch(error => {
        res.json({
        message: 'An error Occured!!!'
    })
})
}

    module.exports = {
        index,              // Show the list of Abnormal Symptoms To Doctor.
        show,              //Show an Abnormal Symptoms By patient Name To Doctor.
        store,            //add Abnormal Symptoms.  
        updateInfo,      //update Abnormal Symptoms
        destroy         //delete Abnormal Symptoms By Doctor After Checking It.
    }
