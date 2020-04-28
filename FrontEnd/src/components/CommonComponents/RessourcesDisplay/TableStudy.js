import React, {Component, Fragment} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import ActionBouton from './ActionBouton'

class TableStudy extends Component {
    

    static defaultProps = {
        hiddenActionBouton: false, 
        hiddenRemoveRow: true
    }

    columns = [{
        dataField: 'StudyOrthancID', 
        hidden: true
    }, {
        dataField: 'StudyDate', 
        text: 'Study Date', 
        sort: true
    }, {
        dataField: 'StudyDescription', 
        text: 'Description',
        sort: true
    }, {
        dataField: 'AccessionNumber', 
        text: 'Accession Number',
        sort: true
    }, {
        dataField: 'Action', 
        text: 'Action', 
        hidden: this.props.hiddenActionBouton,
        formatter:  ( (value, row, index) => 
            <ActionBouton level='studies' orthancID={row.StudyOrthancID} StudyInstanceUID={row.StudyInstanceUID} onDelete={this.props.onDelete} />
        ),
        clickToSelect: false
    }, {
        dataField: 'Remove', 
        text: 'Remove',
        hidden: this.props.hiddenRemoveRow,
        formatter: (cell, row, index) => {
            return <button type="button" className="btn btn-danger" onClick={(e) => {e.stopPropagation(); this.props.removeRow(row, 'study')}}>Remove</button>
        }
    
    }]

    render() {
        return (
            <Fragment>
                <BootstrapTable
                    keyField="StudyOrthancID" 
                    striped={true} 
                    columns={this.columns} 
                    data={this.props.data} 
                    {...this.props} 
                />
                {this.props.button}
            </Fragment>
        )
    }

}

export default TableStudy