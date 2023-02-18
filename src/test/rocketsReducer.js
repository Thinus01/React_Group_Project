export default class RocketTest {
  static addedRockets() {
    const response = {
      data: [
        {
          id: 1,
          flickrImage: 'images',
          rocketName: 'Falcon 1',
          description: 'For pure performance',
          reserved: false,
        },
        {
          id: 2,
          flickrImage: 'images',
          rocketName: 'Falcon 9',
          description: 'Ror pure luxury',
          reserved: false,
        },
        {
          id: 3,
          flickrImage: 'images',
          rocketName: 'Falcon Heavy',
          description: 'For pure entertainment',
          reserved: false,
        },
        {
          id: 4,
          flickrImage: 'images',
          rocketName: 'Starship',
          description: 'For pure comfort',
          reserved: false,
        },
      ],
    };
    return response.data;
  }
}
