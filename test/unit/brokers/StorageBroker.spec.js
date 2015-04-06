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

  describe('when fetching all with a given key', () => {
    var fetchCall;
    beforeEach(() => {
      broker = new StorageBroker([{
        canRun: () => true,
        fetch: (key) => {
          fetchCall = {key: key};
          return [];
        }
      }]);
    });

    it('fetches from the provider with the given key', () => {
      broker.fetch('key');
      expect(fetchCall.key).toBe('key');
    });

    it('fetches from the provider with the given key', () => {
      broker.fetch('anotherKey');
      expect(fetchCall.key).toBe('anotherKey');
    });
  });

  describe('when saving to a given key', () => {
    var saveCall;
    beforeEach(() => {
      broker = new StorageBroker([{
        canRun: () => true,
        save: (key, value) => {
          saveCall = {
            key: key,
            value: value
          };
          return value;
        }
      }]);
    });

    it('saves the value to the provider with the given key', () => {
      broker.save('key', {id: 1});
      expect(saveCall.key).toBe('key');
      expect(saveCall.value.id).toBe(1);
    });

    it('saves the value to the provider with the given key', () => {
      broker.save('anotherKey', {id: 2});
      expect(saveCall.key).toBe('anotherKey');
      expect(saveCall.value.id).toBe(2);
    });
  });
});