import Datastore from 'nedb'
import _ from 'lodash'

var collections = {};
export default function collection(name) {
    if (!_.has(collections, name)) {
        collections[name] = new Datastore({ filename: __dirname +'dapp.wallet.'+ name +'.db', autoload: true });
    }
    return collections[name]
}
