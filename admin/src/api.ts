import axios from '../node_modules/axios/index';
const DOAMIN_PATH = 'https://pos-api.phicsart.com/api/'

export async function category() {
    const response = await axios.get('https://payment-gtwy.azurewebsites.net/payment/payment_registry_api/transactions/123456?page=0&size=5&field=customer_contact_number&keyword=8801767432558&format=json&fbclid=IwAR0GHhe-nip0ReeW3XTcEHirQU6X15vBoDjzxLbCjaDRPUCaZxioSQRMBsk');
    return response.data; 
}

export async function getData(id: number) {
    const response = await axios.get(DOAMIN_PATH + `category/${id}`);
    return response.data;
}

export async function createData(payload: any) {
    const response = await axios.post(DOAMIN_PATH + 'category', payload);
    if (response.status == 201) {
        return response.data;
    }
}

export async function updateData(id: number, data: any) {
    const response = await axios.put(DOAMIN_PATH + `category${id}`, data);
    return response.data;
} 
export async function deleteData(id: number) {
    const response = await axios.delete(DOAMIN_PATH + `category/${id}`);
    return response.data;
}