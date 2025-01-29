// src/pages/components/CustomTable.jsx
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  IconButton,
  Tooltip
} from "@mui/material";
import { Eye, Pencil, Share2, Trash2 } from "lucide-react";
import PropTypes from 'prop-types';
import '../style';

const CustomTable = ({ data, onView, onEdit, onShare, onDelete }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(6);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div className="mt-4">
      <TableContainer component={Paper} sx={{ backgroundColor: 'transparent' }}>
        <Table sx={{ minWidth: 650 }}>
        <TableHead className='tableHead'>
            <TableRow>
              <TableCell className='boldWhiteText'>S.No</TableCell>
              <TableCell className='boldWhiteText'>Draft Name</TableCell>
              <TableCell className='boldWhiteText'>Owner</TableCell>
              <TableCell className='boldWhiteText' sx={{ textAlign: 'right' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.id}
                  className='tableRow'
                >
                  <TableCell className='tableCellText'>{row.id}</TableCell>
                  <TableCell className='tableCellText'>{row.draftName}</TableCell>
                  <TableCell className='tableCellText'>{row.owner}</TableCell>
                  <TableCell sx={{ textAlign: 'right' }}>
                    <div className="d-flex gap-2 justify-content-end">
                      <Tooltip title="View">
                        <IconButton
                          size="small"
                         
                          onClick={() => onView && onView(row)}
                          className="circleButtonWithGradientTableview"
                        >
                          <Eye size={16} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit">
                        <IconButton
                          size="small"
                         
                          onClick={() => onEdit && onEdit(row)}
                          className="circleButtonWithGradientTableedit"
                        >
                          <Pencil size={16} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Share">
                        <IconButton
                          size="small"
                         
                          onClick={() => onShare && onShare(row)}
                          className="circleButtonWithGradientTableshare"
                        >
                          <Share2 size={16} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton
                          size="small"
                         
                          onClick={() => onDelete && onDelete(row)}
                          className='circleButtonWithGradientTabledelete deleteButton'
                        >
                          <Trash2 size={16} />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[10]}
        className='tablePagination'
      />
    </div>
  );
};

CustomTable.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        draftName: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
      })
    ).isRequired,
    onView: PropTypes.func,
    onEdit: PropTypes.func,
    onShare: PropTypes.func,
    onDelete: PropTypes.func,
  };

export default CustomTable;