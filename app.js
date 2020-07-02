const car = (name, model, owner, year, phone, image) => ({
    name,
    model,
    owner,
    year,
    phone,
    image
})

const log = (text, type, date = new Date()) => ({
    text,
    type,
    date
})

const cars = [
    car('Ford', 'Focus', 'Max', 2016, '+7 929 123 45 67', 'images/ford.jpg'),
    car('Audi', 'A-7', 'Vlad', 2018, '+7 900 168 45 35', 'images/audi.jpg'),
    car('Cadillac', 'Escalade', 'Helen', 2015, '+7 929 123 45 67', 'images/cadillac.jpg')
]

new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false
    },
    methods: {
        selectCar(index) {
            this.car = cars[index]
            this.selectedCarIndex = index
        },
        newOrder() {
            this.modalVisibility = false
            this.logs.push(
                log(`Succsess order: ${this.car.name} - ${this.car.model}`, 'ok')
            )
        },
        cancelOrder() {
            this.modalVisibility = false
            log(`Cancelled order: ${this.car.name} - ${this.car.model}`, 'cnl')
        },
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'show phone'
        },
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
            })
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString()
        }
    }
})