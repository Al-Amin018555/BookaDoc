const getStoredAppointment = () =>{
    const appointmentsStr = localStorage.getItem('appointment-list');

    if(appointmentsStr){
        const appointmentsList = JSON.parse(appointmentsStr);
        return appointmentsList;
    }
    
    return [];
}

const saveToAppointment = id =>{

    const storedAppointment = getStoredAppointment();

    if(storedAppointment.includes(id)){
        alert("You have already booked an appointment with this doctor")
    }
    else{
        storedAppointment.push(id);
        const storedAppointmentStr = JSON.stringify(storedAppointment);
        localStorage.setItem('appointment-list',storedAppointmentStr);
        alert("successfully stored into appointments")
    }
}

export {getStoredAppointment,saveToAppointment}