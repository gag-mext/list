/* tslint:disable:jsx-no-multiline-js */
import '../style';
import React from 'react';
import Item from './ListItem';
import classNames from 'classnames';
class List extends React.Component{
  static Item = Item;

  render() {
    let {prefixCls, children, className, style, renderHeader, renderFooter} = this.props;
    const wrapCls = classNames({
      [prefixCls]: true,
      [className]: className,
    });

    return (
      <div className={wrapCls} style={style}>
        {renderHeader ? (<div className={`${prefixCls}-header`}>
          {typeof renderHeader === 'function' ? renderHeader() : renderHeader}
        </div>) : null}
        {children ? (<div className={`${prefixCls}-body`}>{children}</div>) : null}
        {renderFooter ? (<div className={`${prefixCls}-footer`}>
          {typeof renderFooter === 'function' ? renderFooter() : renderFooter}
        </div>) : null}
      </div>
    );
  }
}
List.defaultProps = {
      prefixCls: 'am-list'
};
List.propTypes = {
    /** web only */
    prefixCls: React.PropTypes.string,
    /** web only */
    className: React.PropTypes.string,
    children: React.PropTypes.any,
    renderHeader: React.PropTypes.func,
    renderFooter: React.PropTypes.func,
};
List.displayName = "List";
module.exports=List;
