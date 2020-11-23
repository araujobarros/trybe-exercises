const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  ordered: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
let deliveryPerson = order.ordered.delivery.deliveryPerson;
let name = order.name;
let phoneNumber = order.phoneNumber;
let street = order.address.street;
let number = order.address.number;
let apartment = order.address.apartment;
let finalString = `Olá ${deliveryPerson}, entrega para: ${name}. Telefone: ${phoneNumber}, R. ${street}, Nº: ${number}, Ap: ${apartment}.`
console.log(finalString);
}
customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const namePaymentToReplace = {
    name: 'Luiz Silva',
    payment: {
      total: 50
    }
  }
  const pizzaToReplace = {
    pizza: {
      muzzarella: {
        amount: 1,
        price: 15
      },
      calabresa: {
        amount: 1,
        price: 20
      }
    }
  }
  
  Object.assign(order.ordered, pizzaToReplace)
  Object.assign(order, namePaymentToReplace)
  
  let name = order.name;
  let arrayPizza = Object.keys(order.ordered.pizza)
  let pizza1 = arrayPizza[0];
  let pizza2 = arrayPizza[1];
  let bebida = order.ordered.drinks.coke.type;
  let payment = order.payment.total;
  
  console.log(`Olá ${name}, o total do seu pedido de ${pizza1}, ${pizza2} e ${bebida} é R$ ${payment}.`)
}
orderModifier(order);