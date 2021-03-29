import styled from "styled-components";

const Table = ({ columns, items }) => {
  return (
    <TableWrapper>
      <THeadWrapper>
        <TRWrapper>
          {columns.map((column) => (
            <THWrapper>{column.name}</THWrapper>
          ))}
        </TRWrapper>
      </THeadWrapper>
      <TBodyWrapper>
        {items.map((item) => (
          <TRWrapper key={item.couponId}>
            <TDWrapper>{item.couponId}</TDWrapper>
            <TDWrapper>{item.type}</TDWrapper>
            <TDWrapper>
              
            </TDWrapper>
            {/* <td>{item.description}</td> */}
            <TDWrapper>{item.amount}</TDWrapper>
            <TDWrapper>{item.status}</TDWrapper>
            <TDWrapper>{item.createdDate}</TDWrapper>
            <TDWrapper>{item.updatedDate}</TDWrapper>
          </TRWrapper>
        ))}
      </TBodyWrapper>
    </TableWrapper>
  );
};

const TableWrapper = styled.table`
  width: 100%;
  background: #fff;
  margin: 1em 0;
  border: 1px solid rgba(34, 36, 38, 0.15);
  text-align: left;
  border-collapse: separate;
  border-spacing: 0;
`;

const TBodyWrapper = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

const THeadWrapper = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`;

const TRWrapper = styled.tr`
  width: 100%;
  background: #fff;
  margin: 1em 0;
  border: 1px solid rgba(34, 36, 38, 0.15);
  text-align: center;
  border-collapse: separate;
  border-spacing: 0;
`;

const THWrapper = styled.th`
  background: #f9fafb;
  text-align: inherit;
  color: rgba(0, 0, 0, 0.87);
  padding: 10px 4px;
  vertical-align: inherit;
  font-style: none;
  font-weight: 500;
  font-size: 14px;
  border-bottom: 1px solid rgba(34, 36, 38, 0.1);
  border-left: none;
`;

const TDWrapper = styled.th`
  background: #fff;
  text-align: inherit;
  color: rgba(0, 0, 0, 0.87);
  padding: 10px 4px;
  vertical-align: inherit;
  font-style: none;
  font-weight: 400;
  font-size: 12px;
  border-bottom: 1px solid rgba(34, 36, 38, 0.1);
  border-left: none;
`;

export default Table;
