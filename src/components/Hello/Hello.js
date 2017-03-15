import {mapState} from 'vuex'
import api from '../../api.js'

export default {
  name: 'hello',
  computed: mapState({
    msg: state => state.msg
  }),
  methods: {
    msgInput (value) {
      this.$store.commit('setMsg', value)
    }
  },
  mounted: function() {
	

	// Via callback
	api.now({q: 'Joinville,BR'}, function(data, err) {
	  if (err) {
	    console.error(err)
	  }
	  	console.log(data)
	})
  }
}
