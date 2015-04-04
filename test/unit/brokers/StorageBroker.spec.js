import {StorageBroker} from '../../../src/brokers/StorageBroker'

describe('the storage broker', () => {
  var broker;

  describe('when one provider is runnable', () => {
    beforeEach(() => {
      broker = new StorageBroker([{
        canRun: () => true
      }]);
    });

    it('has one storage provider', () => {
      expect(broker.storageProvider).toBeDefined();
    });
  });

  describe('when two providers are runnable', () => {
    beforeEach(() => {
      broker = new StorageBroker([{
        id: 1,
        canRun: () => true
      },{
        id: 2,
        canRun: () => true
      }]);
    });

    it('uses the first storage provider', () => {
      expect(broker.storageProvider.id).toBe(1);
    });
  });
});