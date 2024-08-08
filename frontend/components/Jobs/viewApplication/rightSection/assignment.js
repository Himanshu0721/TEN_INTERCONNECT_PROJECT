import React from 'react'

const Assignment = () => {
  return (
    <div >
      <div style={{ textAlign: 'right',marginRight:'5%' }}>
        <h4 style={{marginRight:'12%'}}>
          Filter
        </h4>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          Assignment not sent
          <div>
            <div >
              <input type="checkbox" className='input-checkbox' />
            </div>
          </div>
        </div>

        <div style={{marginTop:'2%' }}>
          Interview not scheduled
        </div>
        <div >
          <input type="checkbox" className='input-checkbox' />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{ backgroundColor: 'white', color: 'blue', border: '1px solid black', padding: '1px 5px' }}>Clear All</button>
          <button style={{ marginLeft: '4px', padding: '1px 5px' }}>Show Result</button>
        </div>
      </div>
    </div>

  )
}

export default Assignment