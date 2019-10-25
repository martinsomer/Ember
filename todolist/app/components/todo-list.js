import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({
    items: undefined,
    
    init() {
        this._super(...arguments)
        this.items = []
    },
    
    actions: {
        _createNewItem(value) {
            if (value === '') return
            
            this.items.pushObject({
                id: this.items.length === 0 ? 0 : this.items[this.items.length - 1].id + 1,
                value: value,
                done: false,
            })
            
            this.set('inputField', '')
        },
        
        _checkItem(id) {
            for (let item of this.items) {
                if (item.id !== id) continue

                set(item, 'done', !item.done)
                break
            }
        },
        
        _removeItem(id) {            
            for (let item of this.items) {
                if (item.id !== id) continue
                
                this.items.removeObject(item)
                break
            }
        }
    }
})
