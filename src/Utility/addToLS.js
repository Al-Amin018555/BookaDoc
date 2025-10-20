import toast from "react-hot-toast";


const getStoredAppointment = () =>{
    const appointmentsStr = localStorage.getItem('appointment-list');

    if(appointmentsStr){
        const appointmentsList = JSON.parse(appointmentsStr);
        return appointmentsList;
    }
    
    return [];
}

const saveToAppointment = (id,name) =>{

    const storedAppointment = getStoredAppointment();

    if(storedAppointment.includes(id)){
        toast.error(`Already booked an apponitment with ${name}`)
    }
    else{
        storedAppointment.push(id);
        const storedAppointmentStr = JSON.stringify(storedAppointment);
        localStorage.setItem('appointment-list',storedAppointmentStr);
        toast.success(`Booked an appoint with ${name}`)
    }
}

export {getStoredAppointment,saveToAppointment}