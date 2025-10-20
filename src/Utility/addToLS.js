import toast from "react-hot-toast";


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
        toast.error("Already booked an appointment with this doctor")
    }
    else{
        storedAppointment.push(id);
        const storedAppointmentStr = JSON.stringify(storedAppointment);
        localStorage.setItem('appointment-list',storedAppointmentStr);
        toast.success("Successfully stored into appointments")
    }
}

export {getStoredAppointment,saveToAppointment}