<%inherit file="/base.mako"/>
<%namespace file="/message.mako" import="render_msg" />
<%namespace file="/library/common/common.mako" import="render_template_info" />

%if library_dataset == library_dataset.library_dataset_dataset_association.library_dataset:
    <b><i>This is the latest version of this library dataset</i></b>
%else:
    <font color="red"><b><i>This is an expired version of this library dataset</i></b></font>
%endif
<p/>

<ul class="manage-table-actions">
    <li>
        <a class="action-button" href="${h.url_for( controller='library_common', action='browse_library', cntrller=cntrller, id=library_id, show_deleted=show_deleted )}"><span>Browse this data library</span></a>
    </li>
</ul>

%if msg:
    ${render_msg( msg, messagetype )}
%endif

%if cntrller=='library_admin' or trans.app.security_agent.can_modify_library_item( current_user_roles, library_dataset ):
    <div class="toolForm">
        <div class="toolFormTitle">Edit attributes of ${library_dataset.name}</div>
        <div class="toolFormBody">
            <form name="edit_attributes" action="${h.url_for( controller='library_common', action='library_dataset_info', id=trans.security.encode_id( library_dataset.id ), library_id=library_id, show_deleted=show_deleted )}" method="post">
                <div class="form-row">
                    <label>Name:</label>
                    <div style="float: left; width: 250px; margin-right: 10px;">
                        <input type="text" name="name" value="${library_dataset.name}" size="40"/>
                    </div>
                    <div style="clear: both"></div>
                </div>
                <div class="form-row">
                    <label>Info:</label>
                    <div style="float: left; width: 250px; margin-right: 10px;">
                        <input type="text" name="info" value="${library_dataset.info}" size="40"/>
                    </div>
                    <div style="clear: both"></div>
                </div> 
                <div class="form-row">
                    <input type="submit" name="edit_attributes_button" value="Save"/>
                </div>
            </form>
        </div>
    </div>
%else:
    <div class="toolForm">
        <div class="toolFormTitle">View information about ${library_dataset.name}</div>
        <div class="toolFormBody">
            <div class="form-row">
                <b>Name:</b> ${library_dataset.name}
                <div style="clear: both"></div>
                <b>Info:</b> ${library_dataset.info}
                <div style="clear: both"></div>
                <b>Dataset Versions:</b>
                <div style="clear: both"></div>
            </div>
            <div style="clear: both"></div>
        </div>
    </div>
%endif

%if widgets:
    ${render_template_info( cntrller, library_dataset, library_id, '', widgets )}
%endif
