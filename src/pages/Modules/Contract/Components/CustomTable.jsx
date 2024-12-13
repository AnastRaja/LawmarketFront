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

const buttonStyles = {
  circleButtonWithGradient: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    background: "linear-gradient(180deg, #8462FF 0%, #E23CFF 100%)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    '&:hover': {
      background: "linear-gradient(180deg, #8462FF 20%, #E23CFF 120%)",
    }
  },
};

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
        <TableHead sx={{ 
            backgroundColor: '#1a1a1a',
            '& th': {
              borderBottom: '2px solid #ffffff3b',
              borderRight: '-0px solid #ffffff3b',
              '&:last-child': {
                borderRight: 'none'
              }
            }
          }}>
            <TableRow>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>S.No</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Draft Name</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Owner</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold', textAlign: 'right' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    '& td': { borderColor: '#ffffff3b' }
                  }}
                >
                  <TableCell sx={{ color: '#fff' }}>{row.id}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>{row.draftName}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>{row.owner}</TableCell>
                  <TableCell sx={{ textAlign: 'right' }}>
                    <div className="d-flex gap-2 justify-content-end">
                      <Tooltip title="View">
                        <IconButton
                          size="small"
                          sx={buttonStyles.circleButtonWithGradient}
                          onClick={() => onView && onView(row)}
                        >
                          <Eye size={16} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit">
                        <IconButton
                          size="small"
                          sx={buttonStyles.circleButtonWithGradient}
                          onClick={() => onEdit && onEdit(row)}
                        >
                          <Pencil size={16} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Share">
                        <IconButton
                          size="small"
                          sx={buttonStyles.circleButtonWithGradient}
                          onClick={() => onShare && onShare(row)}
                        >
                          <Share2 size={16} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton
                          size="small"
                          sx={{
                            ...buttonStyles.circleButtonWithGradient,
                            background: 'linear-gradient(180deg, #FF5757 0%, #FF0000 100%)',
                            '&:hover': {
                              background: 'linear-gradient(180deg, #FF5757 20%, #FF0000 120%)',
                            }
                          }}
                          onClick={() => onDelete && onDelete(row)}
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
        sx={{
          color: '#fff',
          '& .MuiTablePagination-selectIcon': {
            color: '#fff'
          },
          '& .MuiTablePagination-actions': {
            color: '#fff'
          }
        }}
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