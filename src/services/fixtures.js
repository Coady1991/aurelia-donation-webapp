export default class Fixtures {

  methods = ['Cash', 'PayPal'];

  candidates = [
    {
      firstName: 'Lisa',
      lastName: 'Simpson'
    },
    {
      firstName: 'Bart',
      lastName: 'Simpson'
    }
  ];

  donations = [
    {
      amount: 23,
      method: 'Cash',
      candidate: this.candidates[0]
    },
    {
      amount: 212,
      method: 'Paypal',
      candidate: this.candidates[1]
    }
  ];
}
