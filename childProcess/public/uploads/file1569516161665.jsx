import React from 'react';
class YourComponent extends React.Component{
   constructor(props){
      super(props);
      this.state={};
   }
    // do http calls or <script> tag code here
   componentDiDMount(){
   }
render(){
return(
<div>
<html lang="en"><head>
  <title>N-API | Node.js v10.16.3 Documentation</title>
</head>
<body className="alt apidoc" id="api-section-n-api">
  <div id="content" className="clearfix">
    <div id="column2" className="interior">
      <div id="intro" className="interior">
        <a href="/" title="Go back to the home page">
          Node.js
        </a>
      </div>
      <ul>
<li><a href="documentation.html" className="nav-documentation">About these Docs</a></li>
<li><a href="synopsis.html" className="nav-synopsis">Usage &amp; Example</a></li>
</ul>
<div className="line"></div>
<ul>
<li><a href="assert.html" className="nav-assert">Assertion Testing</a></li>
<li><a href="async_hooks.html" className="nav-async_hooks">Async Hooks</a></li>
<li><a href="buffer.html" className="nav-buffer">Buffer</a></li>
<li><a href="addons.html" className="nav-addons">C++ Addons</a></li>
<li><a href="n-api.html" className="nav-n-api active">C/C++ Addons - N-API</a></li>
<li><a href="child_process.html" className="nav-child_process">Child Processes</a></li>
<li><a href="cluster.html" className="nav-cluster">Cluster</a></li>
<li><a href="cli.html" className="nav-cli">Command Line Options</a></li>
<li><a href="console.html" className="nav-console">Console</a></li>
<li><a href="crypto.html" className="nav-crypto">Crypto</a></li>
<li><a href="debugger.html" className="nav-debugger">Debugger</a></li>
<li><a href="deprecations.html" className="nav-deprecations">Deprecated APIs</a></li>
<li><a href="dns.html" className="nav-dns">DNS</a></li>
<li><a href="domain.html" className="nav-domain">Domain</a></li>
<li><a href="esm.html" className="nav-esm">ECMAScript Modules</a></li>
<li><a href="errors.html" className="nav-errors">Errors</a></li>
<li><a href="events.html" className="nav-events">Events</a></li>
<li><a href="fs.html" className="nav-fs">File System</a></li>
<li><a href="globals.html" className="nav-globals">Globals</a></li>
<li><a href="http.html" className="nav-http">HTTP</a></li>
<li><a href="http2.html" className="nav-http2">HTTP/2</a></li>
<li><a href="https.html" className="nav-https">HTTPS</a></li>
<li><a href="inspector.html" className="nav-inspector">Inspector</a></li>
<li><a href="intl.html" className="nav-intl">Internationalization</a></li>
<li><a href="modules.html" className="nav-modules">Modules</a></li>
<li><a href="net.html" className="nav-net">Net</a></li>
<li><a href="os.html" className="nav-os">OS</a></li>
<li><a href="path.html" className="nav-path">Path</a></li>
<li><a href="perf_hooks.html" className="nav-perf_hooks">Performance Hooks</a></li>
<li><a href="process.html" className="nav-process">Process</a></li>
<li><a href="punycode.html" className="nav-punycode">Punycode</a></li>
<li><a href="querystring.html" className="nav-querystring">Query Strings</a></li>
<li><a href="readline.html" className="nav-readline">Readline</a></li>
<li><a href="repl.html" className="nav-repl">REPL</a></li>
<li><a href="stream.html" className="nav-stream">Stream</a></li>
<li><a href="string_decoder.html" className="nav-string_decoder">String Decoder</a></li>
<li><a href="timers.html" className="nav-timers">Timers</a></li>
<li><a href="tls.html" className="nav-tls">TLS/SSL</a></li>
<li><a href="tracing.html" className="nav-tracing">Trace Events</a></li>
<li><a href="tty.html" className="nav-tty">TTY</a></li>
<li><a href="dgram.html" className="nav-dgram">UDP/Datagram</a></li>
<li><a href="url.html" className="nav-url">URL</a></li>
<li><a href="util.html" className="nav-util">Utilities</a></li>
<li><a href="v8.html" className="nav-v8">V8</a></li>
<li><a href="vm.html" className="nav-vm">VM</a></li>
<li><a href="worker_threads.html" className="nav-worker_threads">Worker Threads</a></li>
<li><a href="zlib.html" className="nav-zlib">Zlib</a></li>
</ul>
<div className="line"></div>
<ul>
<li><a href="https://github.com/nodejs/node" className="nav-https-github-com-nodejs-node">GitHub Repo &amp; Issue Tracker</a></li>
</ul>
    </div>
    <div id="column1" data-id="n-api" className="interior">
      <header>
        <h1>Node.js v10.16.3 Documentation</h1>
        <div id="gtoc">
          <ul>
            <li>
              <a href="index.html" name="toc">Index</a>
            </li>
            <li>
              <a href="all.html">View on single page</a>
            </li>
            <li>
              <a href="n-api.json">View as JSON</a>
            </li>
            
    <li className="version-picker">
      <a href="#">View another version <span>▼</span></a>
      <ol className="version-picker"><li><a href="https://nodejs.org/docs/latest-v12.x/api/n-api.html">12.x</a></li>
<li><a href="https://nodejs.org/docs/latest-v11.x/api/n-api.html">11.x</a></li>
<li><a href="https://nodejs.org/docs/latest-v10.x/api/n-api.html">10.x <b>LTS</b></a></li>
<li><a href="https://nodejs.org/docs/latest-v9.x/api/n-api.html">9.x</a></li>
<li><a href="https://nodejs.org/docs/latest-v8.x/api/n-api.html">8.x <b>LTS</b></a></li>
<li><a href="https://nodejs.org/docs/latest-v7.x/api/n-api.html">7.x</a></li></ol>
    </li>
  
            <li className="edit_on_github"><a href="https://github.com/nodejs/node/edit/master/doc/api/n-api.md"><span className="github_icon"><svg height="16" width="16" viewBox="0 0 16.1 16.1" fill="currentColor"><path d="M8 0a8 8 0 0 0-2.5 15.6c.4 0 .5-.2.5-.4v-1.5c-2 .4-2.5-.5-2.7-1 0-.1-.5-.9-.8-1-.3-.2-.7-.6 0-.6.6 0 1 .6 1.2.8.7 1.2 1.9 1 2.4.7 0-.5.2-.9.5-1-1.8-.3-3.7-1-3.7-4 0-.9.3-1.6.8-2.2 0-.2-.3-1 .1-2 0 0 .7-.3 2.2.7a7.4 7.4 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 2 .1 2.1.5.6.8 1.3.8 2.2 0 3-1.9 3.7-3.6 4 .3.2.5.7.5 1.4v2.2c0 .2.1.5.5.4A8 8 0 0 0 16 8a8 8 0 0 0-8-8z"></path></svg></span>Edit on GitHub</a></li>
          </ul>
        </div>
        <hr/>
      </header>
      <div id="toc">
        <h2>Table of Contents</h2>
        <ul>
<li>
<p><span className="stability_2"><a href="#n_api_n_api">N-API</a></span></p>
<ul>
<li><a href="#n_api_implications_of_abi_stability">Implications of ABI Stability</a></li>
<li><a href="#n_api_usage">Usage</a></li>
<li><a href="#n_api_n_api_version_matrix">N-API Version Matrix</a></li>
<li>
<p><a href="#n_api_basic_n_api_data_types">Basic N-API Data Types</a></p>
<ul>
<li><a href="#n_api_napi_status">napi_status</a></li>
<li><a href="#n_api_napi_extended_error_info">napi_extended_error_info</a></li>
<li><a href="#n_api_napi_env">napi_env</a></li>
<li><a href="#n_api_napi_value">napi_value</a></li>
<li><a href="#n_api_napi_threadsafe_function">napi_threadsafe_function</a></li>
<li><a href="#n_api_napi_threadsafe_function_release_mode">napi_threadsafe_function_release_mode</a></li>
<li><a href="#n_api_napi_threadsafe_function_call_mode">napi_threadsafe_function_call_mode</a></li>
<li>
<p><a href="#n_api_n_api_memory_management_types">N-API Memory Management types</a></p>
<ul>
<li><a href="#n_api_napi_handle_scope">napi_handle_scope</a></li>
<li><a href="#n_api_napi_escapable_handle_scope">napi_escapable_handle_scope</a></li>
<li><a href="#n_api_napi_ref">napi_ref</a></li>
</ul>
</li>
<li>
<p><a href="#n_api_n_api_callback_types">N-API Callback types</a></p>
<ul>
<li><a href="#n_api_napi_callback_info">napi_callback_info</a></li>
<li><a href="#n_api_napi_callback">napi_callback</a></li>
<li><a href="#n_api_napi_finalize">napi_finalize</a></li>
<li><a href="#n_api_napi_async_execute_callback">napi_async_execute_callback</a></li>
<li><a href="#n_api_napi_async_complete_callback">napi_async_complete_callback</a></li>
<li><a href="#n_api_napi_threadsafe_function_call_js">napi_threadsafe_function_call_js</a></li>
</ul>
</li>
</ul>
</li>
<li>
<p><a href="#n_api_error_handling">Error Handling</a></p>
<ul>
<li>
<p><a href="#n_api_return_values">Return values</a></p>
<ul>
<li><a href="#n_api_napi_get_last_error_info">napi_get_last_error_info</a></li>
</ul>
</li>
<li>
<p><a href="#n_api_exceptions">Exceptions</a></p>
<ul>
<li><a href="#n_api_napi_throw">napi_throw</a></li>
<li><a href="#n_api_napi_throw_error">napi_throw_error</a></li>
<li><a href="#n_api_napi_throw_type_error">napi_throw_type_error</a></li>
<li><a href="#n_api_napi_throw_range_error">napi_throw_range_error</a></li>
<li><a href="#n_api_napi_is_error">napi_is_error</a></li>
<li><a href="#n_api_napi_create_error">napi_create_error</a></li>
<li><a href="#n_api_napi_create_type_error">napi_create_type_error</a></li>
<li><a href="#n_api_napi_create_range_error">napi_create_range_error</a></li>
<li><a href="#n_api_napi_get_and_clear_last_exception">napi_get_and_clear_last_exception</a></li>
<li><a href="#n_api_napi_is_exception_pending">napi_is_exception_pending</a></li>
<li><a href="#n_api_napi_fatal_exception">napi_fatal_exception</a></li>
</ul>
</li>
<li>
<p><a href="#n_api_fatal_errors">Fatal Errors</a></p>
<ul>
<li><a href="#n_api_napi_fatal_error">napi_fatal_error</a></li>
</ul>
</li>
</ul>
</li>
<li>
<p><a href="#n_api_object_lifetime_management">Object Lifetime management</a></p>
<ul>
<li>
<p><a href="#n_api_making_handle_lifespan_shorter_than_that_of_the_native_method">Making handle lifespan shorter than that of the native method</a></p>
<ul>
<li><a href="#n_api_napi_open_handle_scope">napi_open_handle_scope</a></li>
<li><a href="#n_api_napi_close_handle_scope">napi_close_handle_scope</a></li>
<li><a href="#n_api_napi_open_escapable_handle_scope">napi_open_escapable_handle_scope</a></li>
<li><a href="#n_api_napi_close_escapable_handle_scope">napi_close_escapable_handle_scope</a></li>
<li><a href="#n_api_napi_escape_handle">napi_escape_handle</a></li>
</ul>
</li>
<li>
<p><a href="#n_api_references_to_objects_with_a_lifespan_longer_than_that_of_the_native_method">References to objects with a lifespan longer than that of the native method</a></p>
<ul>
<li><a href="#n_api_napi_create_reference">napi_create_reference</a></li>
<li><a href="#n_api_napi_delete_reference">napi_delete_reference</a></li>
<li><a href="#n_api_napi_reference_ref">napi_reference_ref</a></li>
<li><a href="#n_api_napi_reference_unref">napi_reference_unref</a></li>
<li><a href="#n_api_napi_get_reference_value">napi_get_reference_value</a></li>
</ul>
</li>
<li>
<p><a href="#n_api_cleanup_on_exit_of_the_current_node_js_instance">Cleanup on exit of the current Node.js instance</a></p>
<ul>
<li><a href="#n_api_napi_add_env_cleanup_hook">napi_add_env_cleanup_hook</a></li>
<li><a href="#n_api_napi_remove_env_cleanup_hook">napi_remove_env_cleanup_hook</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#n_api_module_registration">Module registration</a></li>
<li>
<p><a href="#n_api_working_with_javascript_values">Working with JavaScript Values</a></p>
<ul>
<li>
<p><a href="#n_api_enum_types">Enum types</a></p>
<ul>
<li><a href="#n_api_napi_valuetype">napi_valuetype</a></li>
<li><a href="#n_api_napi_typedarray_type">napi_typedarray_type</a></li>
</ul>
</li>
<li>
<p><a href="#n_api_object_creation_functions">Object Creation Functions</a></p>
<ul>
<li><a href="#n_api_napi_create_array">napi_create_array</a></li>
<li><a href="#n_api_napi_create_array_with_length">napi_create_array_with_length</a></li>
<li><a href="#n_api_napi_create_arraybuffer">napi_create_arraybuffer</a></li>
<li><a href="#n_api_napi_create_buffer">napi_create_buffer</a></li>
<li><a href="#n_api_napi_create_buffer_copy">napi_create_buffer_copy</a></li>
<li><a href="#n_api_napi_create_external">napi_create_external</a></li>
<li><a href="#n_api_napi_create_external_arraybuffer">napi_create_external_arraybuffer</a></li>
<li><a href="#n_api_napi_create_external_buffer">napi_create_external_buffer</a></li>
<li><a href="#n_api_napi_create_object">napi_create_object</a></li>
<li><a href="#n_api_napi_create_symbol">napi_create_symbol</a></li>
<li><a href="#n_api_napi_create_typedarray">napi_create_typedarray</a></li>
<li><a href="#n_api_napi_create_dataview">napi_create_dataview</a></li>
</ul>
</li>
<li>
<p><a href="#n_api_functions_to_convert_from_c_types_to_n_api">Functions to convert from C types to N-API</a></p>
<ul>
<li><a href="#n_api_napi_create_int32">napi_create_int32</a></li>
<li><a href="#n_api_napi_create_uint32">napi_create_uint32</a></li>
<li><a href="#n_api_napi_create_int64">napi_create_int64</a></li>
<li><a href="#n_api_napi_create_double">napi_create_double</a></li>
<li><span className="stability_1"><a href="#n_api_napi_create_bigint_int64">napi_create_bigint_int64</a></span></li>
<li><span className="stability_1"><a href="#n_api_napi_create_bigint_uint64">napi_create_bigint_uint64</a></span></li>
<li><span className="stability_1"><a href="#n_api_napi_create_bigint_words">napi_create_bigint_words</a></span></li>
<li><a href="#n_api_napi_create_string_latin1">napi_create_string_latin1</a></li>
<li><a href="#n_api_napi_create_string_utf16">napi_create_string_utf16</a></li>
<li><a href="#n_api_napi_create_string_utf8">napi_create_string_utf8</a></li>
</ul>
</li>
<li>
<p><a href="#n_api_functions_to_convert_from_n_api_to_c_types">Functions to convert from N-API to C types</a></p>
<ul>
<li><a href="#n_api_napi_get_array_length">napi_get_array_length</a></li>
<li><a href="#n_api_napi_get_arraybuffer_info">napi_get_arraybuffer_info</a></li>
<li><a href="#n_api_napi_get_buffer_info">napi_get_buffer_info</a></li>
<li><a href="#n_api_napi_get_prototype">napi_get_prototype</a></li>
<li><a href="#n_api_napi_get_typedarray_info">napi_get_typedarray_info</a></li>
<li><a href="#n_api_napi_get_dataview_info">napi_get_dataview_info</a></li>
<li><a href="#n_api_napi_get_value_bool">napi_get_value_bool</a></li>
<li><a href="#n_api_napi_get_value_double">napi_get_value_double</a></li>
<li><span className="stability_1"><a href="#n_api_napi_get_value_bigint_int64">napi_get_value_bigint_int64</a></span></li>
<li><span className="stability_1"><a href="#n_api_napi_get_value_bigint_uint64">napi_get_value_bigint_uint64</a></span></li>
<li><span className="stability_1"><a href="#n_api_napi_get_value_bigint_words">napi_get_value_bigint_words</a></span></li>
<li><a href="#n_api_napi_get_value_external">napi_get_value_external</a></li>
<li><a href="#n_api_napi_get_value_int32">napi_get_value_int32</a></li>
<li><a href="#n_api_napi_get_value_int64">napi_get_value_int64</a></li>
<li><a href="#n_api_napi_get_value_string_latin1">napi_get_value_string_latin1</a></li>
<li><a href="#n_api_napi_get_value_string_utf8">napi_get_value_string_utf8</a></li>
<li><a href="#n_api_napi_get_value_string_utf16">napi_get_value_string_utf16</a></li>
<li><a href="#n_api_napi_get_value_uint32">napi_get_value_uint32</a></li>
</ul>
</li>
<li>
<p><a href="#n_api_functions_to_get_global_instances">Functions to get global instances</a></p>
<ul>
<li><a href="#n_api_napi_get_boolean">napi_get_boolean</a></li>
<li><a href="#n_api_napi_get_global">napi_get_global</a></li>
<li><a href="#n_api_napi_get_null">napi_get_null</a></li>
<li><a href="#n_api_napi_get_undefined">napi_get_undefined</a></li>
</ul>
</li>
</ul>
</li>
<li>
<p><a href="#n_api_working_with_javascript_values_abstract_operations">Working with JavaScript Values - Abstract Operations</a></p>
<ul>
<li><a href="#n_api_napi_coerce_to_bool">napi_coerce_to_bool</a></li>
<li><a href="#n_api_napi_coerce_to_number">napi_coerce_to_number</a></li>
<li><a href="#n_api_napi_coerce_to_object">napi_coerce_to_object</a></li>
<li><a href="#n_api_napi_coerce_to_string">napi_coerce_to_string</a></li>
<li><a href="#n_api_napi_typeof">napi_typeof</a></li>
<li><a href="#n_api_napi_instanceof">napi_instanceof</a></li>
<li><a href="#n_api_napi_is_array">napi_is_array</a></li>
<li><a href="#n_api_napi_is_arraybuffer">napi_is_arraybuffer</a></li>
<li><a href="#n_api_napi_is_buffer">napi_is_buffer</a></li>
<li><a href="#n_api_napi_is_error_1">napi_is_error</a></li>
<li><a href="#n_api_napi_is_typedarray">napi_is_typedarray</a></li>
<li><a href="#n_api_napi_is_dataview">napi_is_dataview</a></li>
<li><a href="#n_api_napi_strict_equals">napi_strict_equals</a></li>
</ul>
</li>
<li>
<p><a href="#n_api_working_with_javascript_properties">Working with JavaScript Properties</a></p>
<ul>
<li>
<p><a href="#n_api_structures">Structures</a></p>
<ul>
<li><a href="#n_api_napi_property_attributes">napi_property_attributes</a></li>
<li><a href="#n_api_napi_property_descriptor">napi_property_descriptor</a></li>
</ul>
</li>
<li>
<p><a href="#n_api_functions">Functions</a></p>
<ul>
<li><a href="#n_api_napi_get_property_names">napi_get_property_names</a></li>
<li><a href="#n_api_napi_set_property">napi_set_property</a></li>
<li><a href="#n_api_napi_get_property">napi_get_property</a></li>
<li><a href="#n_api_napi_has_property">napi_has_property</a></li>
<li><a href="#n_api_napi_delete_property">napi_delete_property</a></li>
<li><a href="#n_api_napi_has_own_property">napi_has_own_property</a></li>
<li><a href="#n_api_napi_set_named_property">napi_set_named_property</a></li>
<li><a href="#n_api_napi_get_named_property">napi_get_named_property</a></li>
<li><a href="#n_api_napi_has_named_property">napi_has_named_property</a></li>
<li><a href="#n_api_napi_set_element">napi_set_element</a></li>
<li><a href="#n_api_napi_get_element">napi_get_element</a></li>
<li><a href="#n_api_napi_has_element">napi_has_element</a></li>
<li><a href="#n_api_napi_delete_element">napi_delete_element</a></li>
<li><a href="#n_api_napi_define_properties">napi_define_properties</a></li>
</ul>
</li>
</ul>
</li>
<li>
<p><a href="#n_api_working_with_javascript_functions">Working with JavaScript Functions</a></p>
<ul>
<li><a href="#n_api_napi_call_function">napi_call_function</a></li>
<li><a href="#n_api_napi_create_function">napi_create_function</a></li>
<li><a href="#n_api_napi_get_cb_info">napi_get_cb_info</a></li>
<li><a href="#n_api_napi_get_new_target">napi_get_new_target</a></li>
<li><a href="#n_api_napi_new_instance">napi_new_instance</a></li>
</ul>
</li>
<li>
<p><a href="#n_api_object_wrap">Object Wrap</a></p>
<ul>
<li><a href="#n_api_napi_define_class">napi_define_class</a></li>
<li><a href="#n_api_napi_wrap">napi_wrap</a></li>
<li><a href="#n_api_napi_unwrap">napi_unwrap</a></li>
<li><a href="#n_api_napi_remove_wrap">napi_remove_wrap</a></li>
<li><a href="#n_api_napi_add_finalizer">napi_add_finalizer</a></li>
</ul>
</li>
<li>
<p><a href="#n_api_simple_asynchronous_operations">Simple Asynchronous Operations</a></p>
<ul>
<li><a href="#n_api_napi_create_async_work">napi_create_async_work</a></li>
<li><a href="#n_api_napi_delete_async_work">napi_delete_async_work</a></li>
<li><a href="#n_api_napi_queue_async_work">napi_queue_async_work</a></li>
<li><a href="#n_api_napi_cancel_async_work">napi_cancel_async_work</a></li>
</ul>
</li>
<li>
<p><a href="#n_api_custom_asynchronous_operations">Custom Asynchronous Operations</a></p>
<ul>
<li><a href="#n_api_napi_async_init">napi_async_init</a></li>
<li><a href="#n_api_napi_async_destroy">napi_async_destroy</a></li>
<li><a href="#n_api_napi_make_callback">napi_make_callback</a></li>
<li><a href="#n_api_napi_open_callback_scope">napi_open_callback_scope</a></li>
<li><a href="#n_api_napi_close_callback_scope">napi_close_callback_scope</a></li>
</ul>
</li>
<li>
<p><a href="#n_api_version_management">Version Management</a></p>
<ul>
<li><a href="#n_api_napi_get_node_version">napi_get_node_version</a></li>
<li><a href="#n_api_napi_get_version">napi_get_version</a></li>
</ul>
</li>
<li>
<p><a href="#n_api_memory_management">Memory Management</a></p>
<ul>
<li><a href="#n_api_napi_adjust_external_memory">napi_adjust_external_memory</a></li>
</ul>
</li>
<li>
<p><a href="#n_api_promises">Promises</a></p>
<ul>
<li><a href="#n_api_napi_create_promise">napi_create_promise</a></li>
<li><a href="#n_api_napi_resolve_deferred">napi_resolve_deferred</a></li>
<li><a href="#n_api_napi_reject_deferred">napi_reject_deferred</a></li>
<li><a href="#n_api_napi_is_promise">napi_is_promise</a></li>
</ul>
</li>
<li>
<p><a href="#n_api_script_execution">Script execution</a></p>
<ul>
<li><a href="#n_api_napi_run_script">napi_run_script</a></li>
</ul>
</li>
<li>
<p><a href="#n_api_libuv_event_loop">libuv event loop</a></p>
<ul>
<li><a href="#n_api_napi_get_uv_event_loop">napi_get_uv_event_loop</a></li>
</ul>
</li>
<li>
<p><a href="#n_api_asynchronous_thread_safe_function_calls">Asynchronous Thread-safe Function Calls</a></p>
<ul>
<li><a href="#n_api_napi_create_threadsafe_function">napi_create_threadsafe_function</a></li>
<li><a href="#n_api_napi_get_threadsafe_function_context">napi_get_threadsafe_function_context</a></li>
<li><a href="#n_api_napi_call_threadsafe_function">napi_call_threadsafe_function</a></li>
<li><a href="#n_api_napi_acquire_threadsafe_function">napi_acquire_threadsafe_function</a></li>
<li><a href="#n_api_napi_release_threadsafe_function">napi_release_threadsafe_function</a></li>
<li><a href="#n_api_napi_ref_threadsafe_function">napi_ref_threadsafe_function</a></li>
<li><a href="#n_api_napi_unref_threadsafe_function">napi_unref_threadsafe_function</a></li>
</ul>
</li>
</ul>
</li>
</ul>
      </div>
      <div id="apicontent">
        <h1>N-API<span><a className="mark" href="#n_api_n_api" id="n_api_n_api">#</a></span></h1>
<p></p><div className="api_stability api_stability_2"><a href="documentation.html#documentation_stability_index">Stability: 2</a> - Stable</div><p></p>
<p>N-API (pronounced N as in the letter, followed by API)
is an API for building native Addons. It is independent from
the underlying JavaScript runtime (ex V8) and is maintained as part of
Node.js itself. This API will be Application Binary Interface (ABI) stable
across versions of Node.js. It is intended to insulate Addons from
changes in the underlying JavaScript engine and allow modules
compiled for one major version to run on later major versions of Node.js without
recompilation. The <a href="https://nodejs.org/en/docs/guides/abi-stability/">ABI Stability</a> guide provides a more in-depth explanation.</p>
<p>Addons are built/packaged with the same approach/tools
outlined in the section titled <a href="addons.html">C++ Addons</a>.
The only difference is the set of APIs that are used by the native code.
Instead of using the V8 or <a href="https://github.com/nodejs/nan">Native Abstractions for Node.js</a> APIs,
the functions available in the N-API are used.</p>
<p>APIs exposed by N-API are generally used to create and manipulate
JavaScript values. Concepts and operations generally map to ideas specified
in the ECMA262 Language Specification. The APIs have the following
properties:</p>
<ul>
<li>All N-API calls return a status code of type <code>napi_status</code>. This
status indicates whether the API call succeeded or failed.</li>
<li>The API's return value is passed via an out parameter.</li>
<li>All JavaScript values are abstracted behind an opaque type named
<code>napi_value</code>.</li>
<li>In case of an error status code, additional information can be obtained
using <code>napi_get_last_error_info</code>. More information can be found in the error
handling section <a href="#n_api_error_handling">Error Handling</a>.</li>
</ul>
<p>The N-API is a C API that ensures ABI stability across Node.js versions
and different compiler levels. A C++ API can be easier to use.
To support using C++, the project maintains a
C++ wrapper module called
<a href="https://github.com/nodejs/node-addon-api">node-addon-api</a>.
This wrapper provides an inlineable C++ API. Binaries built
with <code>node-addon-api</code> will depend on the symbols for the N-API C-based
functions exported by Node.js. <code>node-addon-api</code> is a more
efficient way to write code that calls N-API. Take, for example, the
following <code>node-addon-api</code> code. The first section shows the
<code>node-addon-api</code> code and the second section shows what actually gets
used in the addon.</p>
<pre className="sh_sourceCode"><code className="language-C++"><span className="sh_predef_func">Object</span> obj <span className="sh_symbol">=</span> <span className="sh_predef_func">Object</span><span className="sh_symbol">::</span><span className="sh_function">New</span><span className="sh_symbol">(</span>env<span className="sh_symbol">);</span>
obj<span className="sh_symbol">[</span><span className="sh_string">"foo"</span><span className="sh_symbol">]</span> <span className="sh_symbol">=</span> <span className="sh_predef_func">String</span><span className="sh_symbol">::</span><span className="sh_function">New</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_string">"bar"</span><span className="sh_symbol">);</span>
</code></pre>
<pre className="sh_sourceCode"><code className="language-C++">napi_status status<span className="sh_symbol">;</span>
napi_value object<span className="sh_symbol">,</span> string<span className="sh_symbol">;</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_create_object</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>object<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_cbracket">{</span>
  <span className="sh_function">napi_throw_error</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_symbol">...);</span>
  <span className="sh_keyword">return</span><span className="sh_symbol">;</span>
<span className="sh_cbracket">}</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_create_string_utf8</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_string">"bar"</span><span className="sh_symbol">,</span> NAPI_AUTO_LENGTH<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>string<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_cbracket">{</span>
  <span className="sh_function">napi_throw_error</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_symbol">...);</span>
  <span className="sh_keyword">return</span><span className="sh_symbol">;</span>
<span className="sh_cbracket">}</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_set_named_property</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> object<span className="sh_symbol">,</span> <span className="sh_string">"foo"</span><span className="sh_symbol">,</span> string<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_cbracket">{</span>
  <span className="sh_function">napi_throw_error</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_symbol">...);</span>
  <span className="sh_keyword">return</span><span className="sh_symbol">;</span>
<span className="sh_cbracket">}</span>
</code></pre>
<p>The end result is that the addon only uses the exported C APIs. As a result,
it still gets the benefits of the ABI stability provided by the C API.</p>
<p>When using <code>node-addon-api</code> instead of the C APIs, start with the API
<a href="https://github.com/nodejs/node-addon-api#api-documentation">docs</a>
for <code>node-addon-api</code>.</p>
<h2>Implications of ABI Stability<span><a className="mark" href="#n_api_implications_of_abi_stability" id="n_api_implications_of_abi_stability">#</a></span></h2>
<p>Although N-API provides an ABI stability guarantee, other parts of Node.js do
not, and any external libraries used from the addon may not. In particular,
none of the following APIs provide an ABI stability guarantee across major
versions:</p>
<ul>
<li>
<p>the Node.js C++ APIs available via any of</p>
<pre className="sh_sourceCode"><code className="language-C++">#include <span className="sh_symbol">&lt;</span>node<span className="sh_symbol">.</span>h<span className="sh_symbol">&gt;</span>
#include <span className="sh_symbol">&lt;</span>node_buffer<span className="sh_symbol">.</span>h<span className="sh_symbol">&gt;</span>
#include <span className="sh_symbol">&lt;</span>node_version<span className="sh_symbol">.</span>h<span className="sh_symbol">&gt;</span>
#include <span className="sh_symbol">&lt;</span>node_object_wrap<span className="sh_symbol">.</span>h<span className="sh_symbol">&gt;</span>
</code></pre>
</li>
<li>
<p>the libuv APIs which are also included with Node.js and available via</p>
<pre className="sh_sourceCode"><code className="language-C++">#include <span className="sh_symbol">&lt;</span>uv<span className="sh_symbol">.</span>h<span className="sh_symbol">&gt;</span>
</code></pre>
</li>
<li>
<p>the V8 API available via</p>
<pre className="sh_sourceCode"><code className="language-C++">#include <span className="sh_symbol">&lt;</span>v8<span className="sh_symbol">.</span>h<span className="sh_symbol">&gt;</span>
</code></pre>
</li>
</ul>
<p>Thus, for an addon to remain ABI-compatible across Node.js major versions, it
must make use exclusively of N-API by restricting itself to using</p>
<pre className="sh_sourceCode"><code className="language-C">#include <span className="sh_symbol">&lt;</span>node_api<span className="sh_symbol">.</span>h<span className="sh_symbol">&gt;</span>
</code></pre>
<p>and by checking, for all external libraries that it uses, that the external
library makes ABI stability guarantees similar to N-API.</p>
<h2>Usage<span><a className="mark" href="#n_api_usage" id="n_api_usage">#</a></span></h2>
<p>In order to use the N-API functions, include the file
<a href="https://github.com/nodejs/node/blob/master/src/node_api.h"><code>node_api.h</code></a>
which is located in the src directory in the node development tree:</p>
<pre className="sh_sourceCode"><code className="language-C">#include <span className="sh_symbol">&lt;</span>node_api<span className="sh_symbol">.</span>h<span className="sh_symbol">&gt;</span>
</code></pre>
<p>This will opt into the default <code>NAPI_VERSION</code> for the given release of Node.js.
In order to ensure compatibility with specific versions of N-API, the version
can be specified explicitly when including the header:</p>
<pre className="sh_sourceCode"><code className="language-C">#define NAPI_VERSION <span className="sh_number">3</span>
#include <span className="sh_symbol">&lt;</span>node_api<span className="sh_symbol">.</span>h<span className="sh_symbol">&gt;</span>
</code></pre>
<p>This restricts the N-API surface to just the functionality that was available in
the specified (and earlier) versions.</p>
<p>Some of the N-API surface is considered experimental and requires explicit
opt-in to access those APIs:</p>
<pre className="sh_sourceCode"><code className="language-C">#define NAPI_EXPERIMENTAL
#include <span className="sh_symbol">&lt;</span>node_api<span className="sh_symbol">.</span>h<span className="sh_symbol">&gt;</span>
</code></pre>
<p>In this case the entire API surface, including any experimental APIs, will be
available to the module code.</p>
<h2>N-API Version Matrix<span><a className="mark" href="#n_api_n_api_version_matrix" id="n_api_n_api_version_matrix">#</a></span></h2>
<table><thead><tr><th align="center"></th><th align="center">1</th><th align="center">2</th><th align="center">3</th><th align="center">4</th></tr></thead><tbody><tr><td align="center">v6.x</td><td align="center"></td><td align="center"></td><td align="center">v6.14.2*</td><td align="center"></td></tr><tr><td align="center">v8.x</td><td align="center">v8.0.0*</td><td align="center">v8.10.0*</td><td align="center">v8.11.2</td><td align="center"></td></tr><tr><td align="center">v9.x</td><td align="center">v9.0.0*</td><td align="center">v9.3.0*</td><td align="center">v9.11.0*</td><td align="center"></td></tr><tr><td align="center">v10.x</td><td align="center"></td><td align="center"></td><td align="center">v10.0.0</td><td align="center">v10.16.0</td></tr><tr><td align="center">v11.x</td><td align="center"></td><td align="center"></td><td align="center">v11.0.0</td><td align="center">v11.8.0</td></tr></tbody></table>
<p>* Indicates that the N-API version was released as experimental</p>
<h2>Basic N-API Data Types<span><a className="mark" href="#n_api_basic_n_api_data_types" id="n_api_basic_n_api_data_types">#</a></span></h2>
<p>N-API exposes the following fundamental datatypes as abstractions that are
consumed by the various APIs. These APIs should be treated as opaque,
introspectable only with other N-API calls.</p>
<h3>napi_status<span><a className="mark" href="#n_api_napi_status" id="n_api_napi_status">#</a></span></h3>
<p>Integral status code indicating the success or failure of a N-API call.
Currently, the following status codes are supported.</p>
<pre className="sh_sourceCode"><code className="language-C">typedef <span className="sh_keyword">enum</span> <span className="sh_cbracket">{</span>
  napi_ok<span className="sh_symbol">,</span>
  napi_invalid_arg<span className="sh_symbol">,</span>
  napi_object_expected<span className="sh_symbol">,</span>
  napi_string_expected<span className="sh_symbol">,</span>
  napi_name_expected<span className="sh_symbol">,</span>
  napi_function_expected<span className="sh_symbol">,</span>
  napi_number_expected<span className="sh_symbol">,</span>
  napi_boolean_expected<span className="sh_symbol">,</span>
  napi_array_expected<span className="sh_symbol">,</span>
  napi_generic_failure<span className="sh_symbol">,</span>
  napi_pending_exception<span className="sh_symbol">,</span>
  napi_cancelled<span className="sh_symbol">,</span>
  napi_escape_called_twice<span className="sh_symbol">,</span>
  napi_handle_scope_mismatch<span className="sh_symbol">,</span>
  napi_callback_scope_mismatch<span className="sh_symbol">,</span>
  napi_queue_full<span className="sh_symbol">,</span>
  napi_closing<span className="sh_symbol">,</span>
  napi_bigint_expected<span className="sh_symbol">,</span>
<span className="sh_cbracket">}</span> napi_status<span className="sh_symbol">;</span>
</code></pre>
<p>If additional information is required upon an API returning a failed status,
it can be obtained by calling <code>napi_get_last_error_info</code>.</p>
<h3>napi_extended_error_info<span><a className="mark" href="#n_api_napi_extended_error_info" id="n_api_napi_extended_error_info">#</a></span></h3>
<pre className="sh_sourceCode"><code className="language-C">typedef struct <span className="sh_cbracket">{</span>
  <span className="sh_keyword">const</span> char<span className="sh_symbol">*</span> error_message<span className="sh_symbol">;</span>
  void<span className="sh_symbol">*</span> engine_reserved<span className="sh_symbol">;</span>
  uint32_t engine_error_code<span className="sh_symbol">;</span>
  napi_status error_code<span className="sh_symbol">;</span>
<span className="sh_cbracket">}</span> napi_extended_error_info<span className="sh_symbol">;</span>
</code></pre>
<ul>
<li><code>error_message</code>: UTF8-encoded string containing a VM-neutral description of
the error.</li>
<li><code>engine_reserved</code>: Reserved for VM-specific error details. This is currently
not implemented for any VM.</li>
<li><code>engine_error_code</code>: VM-specific error code. This is currently
not implemented for any VM.</li>
<li><code>error_code</code>: The N-API status code that originated with the last error.</li>
</ul>
<p>See the <a href="#n_api_error_handling">Error Handling</a> section for additional information.</p>
<h3>napi_env<span><a className="mark" href="#n_api_napi_env" id="n_api_napi_env">#</a></span></h3>
<p><code>napi_env</code> is used to represent a context that the underlying N-API
implementation can use to persist VM-specific state. This structure is passed
to native functions when they're invoked, and it must be passed back when
making N-API calls. Specifically, the same <code>napi_env</code> that was passed in when
the initial native function was called must be passed to any subsequent
nested N-API calls. Caching the <code>napi_env</code> for the purpose of general reuse is
not allowed.</p>
<h3>napi_value<span><a className="mark" href="#n_api_napi_value" id="n_api_napi_value">#</a></span></h3>
<p>This is an opaque pointer that is used to represent a JavaScript value.</p>
<h3>napi_threadsafe_function<span><a className="mark" href="#n_api_napi_threadsafe_function" id="n_api_napi_threadsafe_function">#</a></span></h3>
<p></p><div className="api_stability api_stability_2"><a href="documentation.html#documentation_stability_index">Stability: 2</a> - Stable</div><p></p>
<p>This is an opaque pointer that represents a JavaScript function which can be
called asynchronously from multiple threads via
<code>napi_call_threadsafe_function()</code>.</p>
<h3>napi_threadsafe_function_release_mode<span><a className="mark" href="#n_api_napi_threadsafe_function_release_mode" id="n_api_napi_threadsafe_function_release_mode">#</a></span></h3>
<p></p><div className="api_stability api_stability_2"><a href="documentation.html#documentation_stability_index">Stability: 2</a> - Stable</div><p></p>
<p>A value to be given to <code>napi_release_threadsafe_function()</code> to indicate whether
the thread-safe function is to be closed immediately (<code>napi_tsfn_abort</code>) or
merely released (<code>napi_tsfn_release</code>) and thus available for subsequent use via
<code>napi_acquire_threadsafe_function()</code> and <code>napi_call_threadsafe_function()</code>.</p>
<pre className="sh_sourceCode"><code className="language-C">typedef <span className="sh_keyword">enum</span> <span className="sh_cbracket">{</span>
  napi_tsfn_release<span className="sh_symbol">,</span>
  napi_tsfn_abort
<span className="sh_cbracket">}</span> napi_threadsafe_function_release_mode<span className="sh_symbol">;</span>
</code></pre>
<h3>napi_threadsafe_function_call_mode<span><a className="mark" href="#n_api_napi_threadsafe_function_call_mode" id="n_api_napi_threadsafe_function_call_mode">#</a></span></h3>
<p></p><div className="api_stability api_stability_2"><a href="documentation.html#documentation_stability_index">Stability: 2</a> - Stable</div><p></p>
<p>A value to be given to <code>napi_call_threadsafe_function()</code> to indicate whether
the call should block whenever the queue associated with the thread-safe
function is full.</p>
<pre className="sh_sourceCode"><code className="language-C">typedef <span className="sh_keyword">enum</span> <span className="sh_cbracket">{</span>
  napi_tsfn_nonblocking<span className="sh_symbol">,</span>
  napi_tsfn_blocking
<span className="sh_cbracket">}</span> napi_threadsafe_function_call_mode<span className="sh_symbol">;</span>
</code></pre>
<h3>N-API Memory Management types<span><a className="mark" href="#n_api_n_api_memory_management_types" id="n_api_n_api_memory_management_types">#</a></span></h3>
<h4>napi_handle_scope<span><a className="mark" href="#n_api_napi_handle_scope" id="n_api_napi_handle_scope">#</a></span></h4>
<p>This is an abstraction used to control and modify the lifetime of objects
created within a particular scope. In general, N-API values are created within
the context of a handle scope. When a native method is called from
JavaScript, a default handle scope will exist. If the user does not explicitly
create a new handle scope, N-API values will be created in the default handle
scope. For any invocations of code outside the execution of a native method
(for instance, during a libuv callback invocation), the module is required to
create a scope before invoking any functions that can result in the creation
of JavaScript values.</p>
<p>Handle scopes are created using <a href="#n_api_napi_open_handle_scope"><code>napi_open_handle_scope</code></a> and are destroyed
using <a href="#n_api_napi_close_handle_scope"><code>napi_close_handle_scope</code></a>. Closing the scope can indicate to the GC
that all <code>napi_value</code>s created during the lifetime of the handle scope are no
longer referenced from the current stack frame.</p>
<p>For more details, review the <a href="#n_api_object_lifetime_management">Object Lifetime Management</a>.</p>
<h4>napi_escapable_handle_scope<span><a className="mark" href="#n_api_napi_escapable_handle_scope" id="n_api_napi_escapable_handle_scope">#</a></span></h4>
<p>Escapable handle scopes are a special type of handle scope to return values
created within a particular handle scope to a parent scope.</p>
<h4>napi_ref<span><a className="mark" href="#n_api_napi_ref" id="n_api_napi_ref">#</a></span></h4>
<p>This is the abstraction to use to reference a <code>napi_value</code>. This allows for
users to manage the lifetimes of JavaScript values, including defining their
minimum lifetimes explicitly.</p>
<p>For more details, review the <a href="#n_api_object_lifetime_management">Object Lifetime Management</a>.</p>
<h3>N-API Callback types<span><a className="mark" href="#n_api_n_api_callback_types" id="n_api_n_api_callback_types">#</a></span></h3>
<h4>napi_callback_info<span><a className="mark" href="#n_api_napi_callback_info" id="n_api_napi_callback_info">#</a></span></h4>
<p>Opaque datatype that is passed to a callback function. It can be used for
getting additional information about the context in which the callback was
invoked.</p>
<h4>napi_callback<span><a className="mark" href="#n_api_napi_callback" id="n_api_napi_callback">#</a></span></h4>
<p>Function pointer type for user-provided native functions which are to be
exposed to JavaScript via N-API. Callback functions should satisfy the
following signature:</p>
<pre className="sh_sourceCode"><code className="language-C">typedef <span className="sh_function">napi_value</span> <span className="sh_symbol">(*</span>napi_callback<span className="sh_symbol">)(</span>napi_env<span className="sh_symbol">,</span> napi_callback_info<span className="sh_symbol">);</span>
</code></pre>
<h4>napi_finalize<span><a className="mark" href="#n_api_napi_finalize" id="n_api_napi_finalize">#</a></span></h4>
<p>Function pointer type for add-on provided functions that allow the user to be
notified when externally-owned data is ready to be cleaned up because the
object with which it was associated with, has been garbage-collected. The user
must provide a function satisfying the following signature which would get
called upon the object's collection. Currently, <code>napi_finalize</code> can be used for
finding out when objects that have external data are collected.</p>
<pre className="sh_sourceCode"><code className="language-C">typedef <span className="sh_function">void</span> <span className="sh_symbol">(*</span>napi_finalize<span className="sh_symbol">)(</span>napi_env env<span className="sh_symbol">,</span>
                              void<span className="sh_symbol">*</span> finalize_data<span className="sh_symbol">,</span>
                              void<span className="sh_symbol">*</span> finalize_hint<span className="sh_symbol">);</span>
</code></pre>
<h4>napi_async_execute_callback<span><a className="mark" href="#n_api_napi_async_execute_callback" id="n_api_napi_async_execute_callback">#</a></span></h4>
<p>Function pointer used with functions that support asynchronous
operations. Callback functions must statisfy the following signature:</p>
<pre className="sh_sourceCode"><code className="language-C">typedef <span className="sh_function">void</span> <span className="sh_symbol">(*</span>napi_async_execute_callback<span className="sh_symbol">)(</span>napi_env env<span className="sh_symbol">,</span> void<span className="sh_symbol">*</span> data<span className="sh_symbol">);</span>
</code></pre>
<p>Implementations of this type of function should avoid making any N-API calls
that could result in the execution of JavaScript or interaction with
JavaScript objects. Most often, any code that needs to make N-API
calls should be made in <code>napi_async_complete_callback</code> instead.</p>
<h4>napi_async_complete_callback<span><a className="mark" href="#n_api_napi_async_complete_callback" id="n_api_napi_async_complete_callback">#</a></span></h4>
<p>Function pointer used with functions that support asynchronous
operations. Callback functions must statisfy the following signature:</p>
<pre className="sh_sourceCode"><code className="language-C">typedef <span className="sh_function">void</span> <span className="sh_symbol">(*</span>napi_async_complete_callback<span className="sh_symbol">)(</span>napi_env env<span className="sh_symbol">,</span>
                                             napi_status status<span className="sh_symbol">,</span>
                                             void<span className="sh_symbol">*</span> data<span className="sh_symbol">);</span>
</code></pre>
<h4>napi_threadsafe_function_call_js<span><a className="mark" href="#n_api_napi_threadsafe_function_call_js" id="n_api_napi_threadsafe_function_call_js">#</a></span></h4>
<p></p><div className="api_stability api_stability_2"><a href="documentation.html#documentation_stability_index">Stability: 2</a> - Stable</div><p></p>
<p>Function pointer used with asynchronous thread-safe function calls. The callback
will be called on the main thread. Its purpose is to use a data item arriving
via the queue from one of the secondary threads to construct the parameters
necessary for a call into JavaScript, usually via <code>napi_call_function</code>, and then
make the call into JavaScript.</p>
<p>The data arriving from the secondary thread via the queue is given in the <code>data</code>
parameter and the JavaScript function to call is given in the <code>js_callback</code>
parameter.</p>
<p>N-API sets up the environment prior to calling this callback, so it is
sufficient to call the JavaScript function via <code>napi_call_function</code> rather than
via <code>napi_make_callback</code>.</p>
<p>Callback functions must satisfy the following signature:</p>
<pre className="sh_sourceCode"><code className="language-C">typedef <span className="sh_function">void</span> <span className="sh_symbol">(*</span>napi_threadsafe_function_call_js<span className="sh_symbol">)(</span>napi_env env<span className="sh_symbol">,</span>
                                                 napi_value js_callback<span className="sh_symbol">,</span>
                                                 void<span className="sh_symbol">*</span> context<span className="sh_symbol">,</span>
                                                 void<span className="sh_symbol">*</span> data<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment to use for API calls, or <code>NULL</code> if the thread-safe
function is being torn down and <code>data</code> may need to be freed.</li>
<li><code>[in] js_callback</code>: The JavaScript function to call, or <code>NULL</code> if the
thread-safe function is being torn down and <code>data</code> may need to be freed.</li>
<li><code>[in] context</code>: The optional data with which the thread-safe function was
created.</li>
<li><code>[in] data</code>: Data created by the secondary thread. It is the responsibility of
the callback to convert this native data to JavaScript values (with N-API
functions) that can be passed as parameters when <code>js_callback</code> is invoked. This
pointer is managed entirely by the threads and this callback. Thus this callback
should free the data.</li>
</ul>
<h2>Error Handling<span><a className="mark" href="#n_api_error_handling" id="n_api_error_handling">#</a></span></h2>
<p>N-API uses both return values and JavaScript exceptions for error handling.
The following sections explain the approach for each case.</p>
<h3>Return values<span><a className="mark" href="#n_api_return_values" id="n_api_return_values">#</a></span></h3>
<p>All of the N-API functions share the same error handling pattern. The
return type of all API functions is <code>napi_status</code>.</p>
<p>The return value will be <code>napi_ok</code> if the request was successful and
no uncaught JavaScript exception was thrown. If an error occurred AND
an exception was thrown, the <code>napi_status</code> value for the error
will be returned. If an exception was thrown, and no error occurred,
<code>napi_pending_exception</code> will be returned.</p>
<p>In cases where a return value other than <code>napi_ok</code> or
<code>napi_pending_exception</code> is returned, <a href="#n_api_napi_is_exception_pending"><code>napi_is_exception_pending</code></a>
must be called to check if an exception is pending.
See the section on exceptions for more details.</p>
<p>The full set of possible <code>napi_status</code> values is defined
in <code>napi_api_types.h</code>.</p>
<p>The <code>napi_status</code> return value provides a VM-independent representation of
the error which occurred. In some cases it is useful to be able to get
more detailed information, including a string representing the error as well as
VM (engine)-specific information.</p>
<p>In order to retrieve this information <a href="#n_api_napi_get_last_error_info"><code>napi_get_last_error_info</code></a>
is provided which returns a <code>napi_extended_error_info</code> structure.
The format of the <code>napi_extended_error_info</code> structure is as follows:</p>
<pre className="sh_sourceCode"><code className="language-C">typedef struct napi_extended_error_info <span className="sh_cbracket">{</span>
  <span className="sh_keyword">const</span> char<span className="sh_symbol">*</span> error_message<span className="sh_symbol">;</span>
  void<span className="sh_symbol">*</span> engine_reserved<span className="sh_symbol">;</span>
  uint32_t engine_error_code<span className="sh_symbol">;</span>
  napi_status error_code<span className="sh_symbol">;</span>
<span className="sh_cbracket">}</span><span className="sh_symbol">;</span>
</code></pre>
<ul>
<li><code>error_message</code>: Textual representation of the error that occurred.</li>
<li><code>engine_reserved</code>: Opaque handle reserved for engine use only.</li>
<li><code>engine_error_code</code>: VM specific error code.</li>
<li><code>error_code</code>: n-api status code for the last error.</li>
</ul>
<p><a href="#n_api_napi_get_last_error_info"><code>napi_get_last_error_info</code></a> returns the information for the last
N-API call that was made.</p>
<p>Do not rely on the content or format of any of the extended information as it
is not subject to SemVer and may change at any time. It is intended only for
logging purposes.</p>
<h4>napi_get_last_error_info<span><a className="mark" href="#n_api_napi_get_last_error_info" id="n_api_napi_get_last_error_info">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status
<span className="sh_function">napi_get_last_error_info</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                         <span className="sh_keyword">const</span> napi_extended_error_info<span className="sh_symbol">**</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[out] result</code>: The <code>napi_extended_error_info</code> structure with more
information about the error.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API retrieves a <code>napi_extended_error_info</code> structure with information
about the last error that occurred.</p>
<p>The content of the <code>napi_extended_error_info</code> returned is only valid up until
an n-api function is called on the same <code>env</code>.</p>
<p>Do not rely on the content or format of any of the extended information as it
is not subject to SemVer and may change at any time. It is intended only for
logging purposes.</p>
<p>This API can be called even if there is a pending JavaScript exception.</p>
<h3>Exceptions<span><a className="mark" href="#n_api_exceptions" id="n_api_exceptions">#</a></span></h3>
<p>Any N-API function call may result in a pending JavaScript exception. This is
obviously the case for any function that may cause the execution of
JavaScript, but N-API specifies that an exception may be pending
on return from any of the API functions.</p>
<p>If the <code>napi_status</code> returned by a function is <code>napi_ok</code> then no
exception is pending and no additional action is required. If the
<code>napi_status</code> returned is anything other than <code>napi_ok</code> or
<code>napi_pending_exception</code>, in order to try to recover and continue
instead of simply returning immediately, <a href="#n_api_napi_is_exception_pending"><code>napi_is_exception_pending</code></a>
must be called in order to determine if an exception is pending or not.</p>
<p>In many cases when an N-API function is called and an exception is
already pending, the function will return immediately with a
<code>napi_status</code> of <code>napi_pending_exception</code>. However, this is not the case
for all functions. N-API allows a subset of the functions to be
called to allow for some minimal cleanup before returning to JavaScript.
In that case, <code>napi_status</code> will reflect the status for the function. It
will not reflect previous pending exceptions. To avoid confusion, check
the error status after every function call.</p>
<p>When an exception is pending one of two approaches can be employed.</p>
<p>The first approach is to do any appropriate cleanup and then return so that
execution will return to JavaScript. As part of the transition back to
JavaScript the exception will be thrown at the point in the JavaScript
code where the native method was invoked. The behavior of most N-API calls
is unspecified while an exception is pending, and many will simply return
<code>napi_pending_exception</code>, so it is important to do as little as possible
and then return to JavaScript where the exception can be handled.</p>
<p>The second approach is to try to handle the exception. There will be cases
where the native code can catch the exception, take the appropriate action,
and then continue. This is only recommended in specific cases
where it is known that the exception can be safely handled. In these
cases <a href="#n_api_napi_get_and_clear_last_exception"><code>napi_get_and_clear_last_exception</code></a> can be used to get and
clear the exception. On success, result will contain the handle to
the last JavaScript <code>Object</code> thrown. If it is determined, after
retrieving the exception, the exception cannot be handled after all
it can be re-thrown it with <a href="#n_api_napi_throw"><code>napi_throw</code></a> where error is the
JavaScript <code>Error</code> object to be thrown.</p>
<p>The following utility functions are also available in case native code
needs to throw an exception or determine if a <code>napi_value</code> is an instance
of a JavaScript <code>Error</code> object: <a href="#n_api_napi_throw_error"><code>napi_throw_error</code></a>,
<a href="#n_api_napi_throw_type_error"><code>napi_throw_type_error</code></a>, <a href="#n_api_napi_throw_range_error"><code>napi_throw_range_error</code></a> and
<a href="#n_api_napi_is_error"><code>napi_is_error</code></a>.</p>
<p>The following utility functions are also available in case native
code needs to create an <code>Error</code> object: <a href="#n_api_napi_create_error"><code>napi_create_error</code></a>,
<a href="#n_api_napi_create_type_error"><code>napi_create_type_error</code></a>, and <a href="#n_api_napi_create_range_error"><code>napi_create_range_error</code></a>,
where result is the <code>napi_value</code> that refers to the newly created
JavaScript <code>Error</code> object.</p>
<p>The Node.js project is adding error codes to all of the errors
generated internally. The goal is for applications to use these
error codes for all error checking. The associated error messages
will remain, but will only be meant to be used for logging and
display with the expectation that the message can change without
SemVer applying. In order to support this model with N-API, both
in internal functionality and for module specific functionality
(as its good practice), the <code>throw_</code> and <code>create_</code> functions
take an optional code parameter which is the string for the code
to be added to the error object. If the optional parameter is NULL
then no code will be associated with the error. If a code is provided,
the name associated with the error is also updated to be:</p>
<pre className="sh_sourceCode"><code className="language-text">originalName <span className="sh_symbol">[</span>code<span className="sh_symbol">]</span>
</code></pre>
<p>where <code>originalName</code> is the original name associated with the error
and <code>code</code> is the code that was provided. For example, if the code
is <code>'ERR_ERROR_1'</code> and a <code>TypeError</code> is being created the name will be:</p>
<pre className="sh_sourceCode"><code className="language-text"><span className="sh_predef_func">TypeError</span> <span className="sh_symbol">[</span>ERR_ERROR_1<span className="sh_symbol">]</span>
</code></pre>
<h4>napi_throw<span><a className="mark" href="#n_api_napi_throw" id="n_api_napi_throw">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status <span className="sh_function">napi_throw</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_value error<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] error</code>: The JavaScript value to be thrown.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API throws the JavaScript value provided.</p>
<h4>napi_throw_error<span><a className="mark" href="#n_api_napi_throw_error" id="n_api_napi_throw_error">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status <span className="sh_function">napi_throw_error</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                         <span className="sh_keyword">const</span> char<span className="sh_symbol">*</span> code<span className="sh_symbol">,</span>
                                         <span className="sh_keyword">const</span> char<span className="sh_symbol">*</span> msg<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] code</code>: Optional error code to be set on the error.</li>
<li><code>[in] msg</code>: C string representing the text to be associated with
the error.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API throws a JavaScript <code>Error</code> with the text provided.</p>
<h4>napi_throw_type_error<span><a className="mark" href="#n_api_napi_throw_type_error" id="n_api_napi_throw_type_error">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status <span className="sh_function">napi_throw_type_error</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                              <span className="sh_keyword">const</span> char<span className="sh_symbol">*</span> code<span className="sh_symbol">,</span>
                                              <span className="sh_keyword">const</span> char<span className="sh_symbol">*</span> msg<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] code</code>: Optional error code to be set on the error.</li>
<li><code>[in] msg</code>: C string representing the text to be associated with
the error.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API throws a JavaScript <code>TypeError</code> with the text provided.</p>
<h4>napi_throw_range_error<span><a className="mark" href="#n_api_napi_throw_range_error" id="n_api_napi_throw_range_error">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status <span className="sh_function">napi_throw_range_error</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                               <span className="sh_keyword">const</span> char<span className="sh_symbol">*</span> code<span className="sh_symbol">,</span>
                                               <span className="sh_keyword">const</span> char<span className="sh_symbol">*</span> msg<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] code</code>: Optional error code to be set on the error.</li>
<li><code>[in] msg</code>: C string representing the text to be associated with
the error.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API throws a JavaScript <code>RangeError</code> with the text provided.</p>
<h4>napi_is_error<span><a className="mark" href="#n_api_napi_is_error" id="n_api_napi_is_error">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status <span className="sh_function">napi_is_error</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                      napi_value value<span className="sh_symbol">,</span>
                                      bool<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: The <code>napi_value</code> to be checked.</li>
<li><code>[out] result</code>: Boolean value that is set to true if <code>napi_value</code> represents
an error, false otherwise.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API queries a <code>napi_value</code> to check if it represents an error object.</p>
<h4>napi_create_error<span><a className="mark" href="#n_api_napi_create_error" id="n_api_napi_create_error">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status <span className="sh_function">napi_create_error</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                          napi_value code<span className="sh_symbol">,</span>
                                          napi_value msg<span className="sh_symbol">,</span>
                                          napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] code</code>: Optional <code>napi_value</code> with the string for the error code to
be associated with the error.</li>
<li><code>[in] msg</code>: <code>napi_value</code> that references a JavaScript <code>String</code> to be
used as the message for the <code>Error</code>.</li>
<li><code>[out] result</code>: <code>napi_value</code> representing the error created.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API returns a JavaScript <code>Error</code> with the text provided.</p>
<h4>napi_create_type_error<span><a className="mark" href="#n_api_napi_create_type_error" id="n_api_napi_create_type_error">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status <span className="sh_function">napi_create_type_error</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                               napi_value code<span className="sh_symbol">,</span>
                                               napi_value msg<span className="sh_symbol">,</span>
                                               napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] code</code>: Optional <code>napi_value</code> with the string for the error code to
be associated with the error.</li>
<li><code>[in] msg</code>: <code>napi_value</code> that references a JavaScript <code>String</code> to be
used as the message for the <code>Error</code>.</li>
<li><code>[out] result</code>: <code>napi_value</code> representing the error created.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API returns a JavaScript <code>TypeError</code> with the text provided.</p>
<h4>napi_create_range_error<span><a className="mark" href="#n_api_napi_create_range_error" id="n_api_napi_create_range_error">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status <span className="sh_function">napi_create_range_error</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                                napi_value code<span className="sh_symbol">,</span>
                                                napi_value msg<span className="sh_symbol">,</span>
                                                napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] code</code>: Optional <code>napi_value</code> with the string for the error code to
be associated with the error.</li>
<li><code>[in] msg</code>: <code>napi_value</code> that references a JavaScript <code>String</code> to be
used as the message for the <code>Error</code>.</li>
<li><code>[out] result</code>: <code>napi_value</code> representing the error created.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API returns a JavaScript <code>RangeError</code> with the text provided.</p>
<h4>napi_get_and_clear_last_exception<span><a className="mark" href="#n_api_napi_get_and_clear_last_exception" id="n_api_napi_get_and_clear_last_exception">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_and_clear_last_exception</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                              napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[out] result</code>: The exception if one is pending, NULL otherwise.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API returns true if an exception is pending.</p>
<p>This API can be called even if there is a pending JavaScript exception.</p>
<h4>napi_is_exception_pending<span><a className="mark" href="#n_api_napi_is_exception_pending" id="n_api_napi_is_exception_pending">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_is_exception_pending</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> bool<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[out] result</code>: Boolean value that is set to true if an exception is pending.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API returns true if an exception is pending.</p>
<p>This API can be called even if there is a pending JavaScript exception.</p>
<h4>napi_fatal_exception<span><a className="mark" href="#n_api_napi_fatal_exception" id="n_api_napi_fatal_exception">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v9.10.0</span>
<span>N-API version: 3</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_fatal_exception</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_value err<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] err</code>: The error that is passed to <code>'uncaughtException'</code>.</li>
</ul>
<p>Trigger an <code>'uncaughtException'</code> in JavaScript. Useful if an async
callback throws an exception with no way to recover.</p>
<h3>Fatal Errors<span><a className="mark" href="#n_api_fatal_errors" id="n_api_fatal_errors">#</a></span></h3>
<p>In the event of an unrecoverable error in a native module, a fatal error can be
thrown to immediately terminate the process.</p>
<h4>napi_fatal_error<span><a className="mark" href="#n_api_napi_fatal_error" id="n_api_napi_fatal_error">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.2.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_NO_RETURN void <span className="sh_function">napi_fatal_error</span><span className="sh_symbol">(</span><span className="sh_keyword">const</span> char<span className="sh_symbol">*</span> location<span className="sh_symbol">,</span>
                                                 size_t location_len<span className="sh_symbol">,</span>
                                                 <span className="sh_keyword">const</span> char<span className="sh_symbol">*</span> message<span className="sh_symbol">,</span>
                                                 size_t message_len<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] location</code>: Optional location at which the error occurred.</li>
<li><code>[in] location_len</code>: The length of the location in bytes, or
<code>NAPI_AUTO_LENGTH</code> if it is null-terminated.</li>
<li><code>[in] message</code>: The message associated with the error.</li>
<li><code>[in] message_len</code>: The length of the message in bytes, or
<code>NAPI_AUTO_LENGTH</code> if it is
null-terminated.</li>
</ul>
<p>The function call does not return, the process will be terminated.</p>
<p>This API can be called even if there is a pending JavaScript exception.</p>
<h2>Object Lifetime management<span><a className="mark" href="#n_api_object_lifetime_management" id="n_api_object_lifetime_management">#</a></span></h2>
<p>As N-API calls are made, handles to objects in the heap for the underlying
VM may be returned as <code>napi_values</code>. These handles must hold the
objects 'live' until they are no longer required by the native code,
otherwise the objects could be collected before the native code was
finished using them.</p>
<p>As object handles are returned they are associated with a
'scope'. The lifespan for the default scope is tied to the lifespan
of the native method call. The result is that, by default, handles
remain valid and the objects associated with these handles will be
held live for the lifespan of the native method call.</p>
<p>In many cases, however, it is necessary that the handles remain valid for
either a shorter or longer lifespan than that of the native method.
The sections which follow describe the N-API functions that can be used
to change the handle lifespan from the default.</p>
<h3>Making handle lifespan shorter than that of the native method<span><a className="mark" href="#n_api_making_handle_lifespan_shorter_than_that_of_the_native_method" id="n_api_making_handle_lifespan_shorter_than_that_of_the_native_method">#</a></span></h3>
<p>It is often necessary to make the lifespan of handles shorter than
the lifespan of a native method. For example, consider a native method
that has a loop which iterates through the elements in a large array:</p>
<pre className="sh_sourceCode"><code className="language-C"><span className="sh_keyword">for</span> <span className="sh_symbol">(</span>int i <span className="sh_symbol">=</span> <span className="sh_number">0</span><span className="sh_symbol">;</span> i <span className="sh_symbol">&lt;</span> <span className="sh_number">1000000</span><span className="sh_symbol">;</span> i<span className="sh_symbol">++)</span> <span className="sh_cbracket">{</span>
  napi_value result<span className="sh_symbol">;</span>
  napi_status status <span className="sh_symbol">=</span> <span className="sh_function">napi_get_element</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> object<span className="sh_symbol">,</span> i<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>result<span className="sh_symbol">);</span>
  <span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_cbracket">{</span>
    <span className="sh_keyword">break</span><span className="sh_symbol">;</span>
  <span className="sh_cbracket">}</span>
  <span className="sh_comment">// do something with element</span>
<span className="sh_cbracket">}</span>
</code></pre>
<p>This would result in a large number of handles being created, consuming
substantial resources. In addition, even though the native code could only
use the most recent handle, all of the associated objects would also be
kept alive since they all share the same scope.</p>
<p>To handle this case, N-API provides the ability to establish a new 'scope' to
which newly created handles will be associated. Once those handles
are no longer required, the scope can be 'closed' and any handles associated
with the scope are invalidated. The methods available to open/close scopes are
<a href="#n_api_napi_open_handle_scope"><code>napi_open_handle_scope</code></a> and <a href="#n_api_napi_close_handle_scope"><code>napi_close_handle_scope</code></a>.</p>
<p>N-API only supports a single nested hierarchy of scopes. There is only one
active scope at any time, and all new handles will be associated with that
scope while it is active. Scopes must be closed in the reverse order from
which they are opened. In addition, all scopes created within a native method
must be closed before returning from that method.</p>
<p>Taking the earlier example, adding calls to <a href="#n_api_napi_open_handle_scope"><code>napi_open_handle_scope</code></a> and
<a href="#n_api_napi_close_handle_scope"><code>napi_close_handle_scope</code></a> would ensure that at most a single handle
is valid throughout the execution of the loop:</p>
<pre className="sh_sourceCode"><code className="language-C"><span className="sh_keyword">for</span> <span className="sh_symbol">(</span>int i <span className="sh_symbol">=</span> <span className="sh_number">0</span><span className="sh_symbol">;</span> i <span className="sh_symbol">&lt;</span> <span className="sh_number">1000000</span><span className="sh_symbol">;</span> i<span className="sh_symbol">++)</span> <span className="sh_cbracket">{</span>
  napi_handle_scope scope<span className="sh_symbol">;</span>
  napi_status status <span className="sh_symbol">=</span> <span className="sh_function">napi_open_handle_scope</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>scope<span className="sh_symbol">);</span>
  <span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_cbracket">{</span>
    <span className="sh_keyword">break</span><span className="sh_symbol">;</span>
  <span className="sh_cbracket">}</span>
  napi_value result<span className="sh_symbol">;</span>
  status <span className="sh_symbol">=</span> <span className="sh_function">napi_get_element</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> object<span className="sh_symbol">,</span> i<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>result<span className="sh_symbol">);</span>
  <span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_cbracket">{</span>
    <span className="sh_keyword">break</span><span className="sh_symbol">;</span>
  <span className="sh_cbracket">}</span>
  <span className="sh_comment">// do something with element</span>
  status <span className="sh_symbol">=</span> <span className="sh_function">napi_close_handle_scope</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> scope<span className="sh_symbol">);</span>
  <span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_cbracket">{</span>
    <span className="sh_keyword">break</span><span className="sh_symbol">;</span>
  <span className="sh_cbracket">}</span>
<span className="sh_cbracket">}</span>
</code></pre>
<p>When nesting scopes, there are cases where a handle from an
inner scope needs to live beyond the lifespan of that scope. N-API supports an
'escapable scope' in order to support this case. An escapable scope
allows one handle to be 'promoted' so that it 'escapes' the
current scope and the lifespan of the handle changes from the current
scope to that of the outer scope.</p>
<p>The methods available to open/close escapable scopes are
<a href="#n_api_napi_open_escapable_handle_scope"><code>napi_open_escapable_handle_scope</code></a> and
<a href="#n_api_napi_close_escapable_handle_scope"><code>napi_close_escapable_handle_scope</code></a>.</p>
<p>The request to promote a handle is made through <a href="#n_api_napi_escape_handle"><code>napi_escape_handle</code></a> which
can only be called once.</p>
<h4>napi_open_handle_scope<span><a className="mark" href="#n_api_napi_open_handle_scope" id="n_api_napi_open_handle_scope">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status <span className="sh_function">napi_open_handle_scope</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                               napi_handle_scope<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[out] result</code>: <code>napi_value</code> representing the new scope.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API open a new scope.</p>
<h4>napi_close_handle_scope<span><a className="mark" href="#n_api_napi_close_handle_scope" id="n_api_napi_close_handle_scope">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status <span className="sh_function">napi_close_handle_scope</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                                napi_handle_scope scope<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] scope</code>: <code>napi_value</code> representing the scope to be closed.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API closes the scope passed in. Scopes must be closed in the
reverse order from which they were created.</p>
<p>This API can be called even if there is a pending JavaScript exception.</p>
<h4>napi_open_escapable_handle_scope<span><a className="mark" href="#n_api_napi_open_escapable_handle_scope" id="n_api_napi_open_escapable_handle_scope">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status
    <span className="sh_function">napi_open_escapable_handle_scope</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                     napi_handle_scope<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[out] result</code>: <code>napi_value</code> representing the new scope.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API open a new scope from which one object can be promoted
to the outer scope.</p>
<h4>napi_close_escapable_handle_scope<span><a className="mark" href="#n_api_napi_close_escapable_handle_scope" id="n_api_napi_close_escapable_handle_scope">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status
    <span className="sh_function">napi_close_escapable_handle_scope</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                      napi_handle_scope scope<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] scope</code>: <code>napi_value</code> representing the scope to be closed.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API closes the scope passed in. Scopes must be closed in the
reverse order from which they were created.</p>
<p>This API can be called even if there is a pending JavaScript exception.</p>
<h4>napi_escape_handle<span><a className="mark" href="#n_api_napi_escape_handle" id="n_api_napi_escape_handle">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_escape_handle</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                               napi_escapable_handle_scope scope<span className="sh_symbol">,</span>
                               napi_value escapee<span className="sh_symbol">,</span>
                               napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] scope</code>: <code>napi_value</code> representing the current scope.</li>
<li><code>[in] escapee</code>: <code>napi_value</code> representing the JavaScript <code>Object</code> to be
escaped.</li>
<li><code>[out] result</code>: <code>napi_value</code> representing the handle to the escaped
<code>Object</code> in the outer scope.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API promotes the handle to the JavaScript object so that it is valid
for the lifetime of the outer scope. It can only be called once per scope.
If it is called more than once an error will be returned.</p>
<p>This API can be called even if there is a pending JavaScript exception.</p>
<h3>References to objects with a lifespan longer than that of the native method<span><a className="mark" href="#n_api_references_to_objects_with_a_lifespan_longer_than_that_of_the_native_method" id="n_api_references_to_objects_with_a_lifespan_longer_than_that_of_the_native_method">#</a></span></h3>
<p>In some cases an addon will need to be able to create and reference objects
with a lifespan longer than that of a single native method invocation. For
example, to create a constructor and later use that constructor
in a request to creates instances, it must be possible to reference
the constructor object across many different instance creation requests. This
would not be possible with a normal handle returned as a <code>napi_value</code> as
described in the earlier section. The lifespan of a normal handle is
managed by scopes and all scopes must be closed before the end of a native
method.</p>
<p>N-API provides methods to create persistent references to an object.
Each persistent reference has an associated count with a value of 0
or higher. The count determines if the reference will keep
the corresponding object live. References with a count of 0 do not
prevent the object from being collected and are often called 'weak'
references. Any count greater than 0 will prevent the object
from being collected.</p>
<p>References can be created with an initial reference count. The count can
then be modified through <a href="#n_api_napi_reference_ref"><code>napi_reference_ref</code></a> and
<a href="#n_api_napi_reference_unref"><code>napi_reference_unref</code></a>. If an object is collected while the count
for a reference is 0, all subsequent calls to
get the object associated with the reference <a href="#n_api_napi_get_reference_value"><code>napi_get_reference_value</code></a>
will return NULL for the returned <code>napi_value</code>. An attempt to call
<a href="#n_api_napi_reference_ref"><code>napi_reference_ref</code></a> for a reference whose object has been collected
will result in an error.</p>
<p>References must be deleted once they are no longer required by the addon. When
a reference is deleted it will no longer prevent the corresponding object from
being collected. Failure to delete a persistent reference will result in
a 'memory leak' with both the native memory for the persistent reference and
the corresponding object on the heap being retained forever.</p>
<p>There can be multiple persistent references created which refer to the same
object, each of which will either keep the object live or not based on its
individual count.</p>
<h4>napi_create_reference<span><a className="mark" href="#n_api_napi_create_reference" id="n_api_napi_create_reference">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status <span className="sh_function">napi_create_reference</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                              napi_value value<span className="sh_symbol">,</span>
                                              int initial_refcount<span className="sh_symbol">,</span>
                                              napi_ref<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: <code>napi_value</code> representing the <code>Object</code> to which we want
a reference.</li>
<li><code>[in] initial_refcount</code>: Initial reference count for the new reference.</li>
<li><code>[out] result</code>: <code>napi_ref</code> pointing to the new reference.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API create a new reference with the specified reference count
to the <code>Object</code> passed in.</p>
<h4>napi_delete_reference<span><a className="mark" href="#n_api_napi_delete_reference" id="n_api_napi_delete_reference">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status <span className="sh_function">napi_delete_reference</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_ref ref<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] ref</code>: <code>napi_ref</code> to be deleted.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API deletes the reference passed in.</p>
<p>This API can be called even if there is a pending JavaScript exception.</p>
<h4>napi_reference_ref<span><a className="mark" href="#n_api_napi_reference_ref" id="n_api_napi_reference_ref">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status <span className="sh_function">napi_reference_ref</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                           napi_ref ref<span className="sh_symbol">,</span>
                                           int<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] ref</code>: <code>napi_ref</code> for which the reference count will be incremented.</li>
<li><code>[out] result</code>: The new reference count.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API increments the reference count for the reference
passed in and returns the resulting reference count.</p>
<h4>napi_reference_unref<span><a className="mark" href="#n_api_napi_reference_unref" id="n_api_napi_reference_unref">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status <span className="sh_function">napi_reference_unref</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                             napi_ref ref<span className="sh_symbol">,</span>
                                             int<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] ref</code>: <code>napi_ref</code> for which the reference count will be decremented.</li>
<li><code>[out] result</code>: The new reference count.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API decrements the reference count for the reference
passed in and returns the resulting reference count.</p>
<h4>napi_get_reference_value<span><a className="mark" href="#n_api_napi_get_reference_value" id="n_api_napi_get_reference_value">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status <span className="sh_function">napi_get_reference_value</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                                 napi_ref ref<span className="sh_symbol">,</span>
                                                 napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<p>the <code>napi_value passed</code> in or out of these methods is a handle to the
object to which the reference is related.</p>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] ref</code>: <code>napi_ref</code> for which we requesting the corresponding <code>Object</code>.</li>
<li><code>[out] result</code>: The <code>napi_value</code> for the <code>Object</code> referenced by the
<code>napi_ref</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>If still valid, this API returns the <code>napi_value</code> representing the
JavaScript <code>Object</code> associated with the <code>napi_ref</code>. Otherwise, result
will be NULL.</p>
<h3>Cleanup on exit of the current Node.js instance<span><a className="mark" href="#n_api_cleanup_on_exit_of_the_current_node_js_instance" id="n_api_cleanup_on_exit_of_the_current_node_js_instance">#</a></span></h3>
<p>While a Node.js process typically releases all its resources when exiting,
embedders of Node.js, or future Worker support, may require addons to register
clean-up hooks that will be run once the current Node.js instance exits.</p>
<p>N-API provides functions for registering and un-registering such callbacks.
When those callbacks are run, all resources that are being held by the addon
should be freed up.</p>
<h4>napi_add_env_cleanup_hook<span><a className="mark" href="#n_api_napi_add_env_cleanup_hook" id="n_api_napi_add_env_cleanup_hook">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v10.2.0</span>
<span>N-API version: 3</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NODE_EXTERN napi_status <span className="sh_function">napi_add_env_cleanup_hook</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                                  <span className="sh_function">void</span> <span className="sh_symbol">(*</span>fun<span className="sh_symbol">)(</span>void<span className="sh_symbol">*</span> arg<span className="sh_symbol">),</span>
                                                  void<span className="sh_symbol">*</span> arg<span className="sh_symbol">);</span>
</code></pre>
<p>Registers <code>fun</code> as a function to be run with the <code>arg</code> parameter once the
current Node.js environment exits.</p>
<p>A function can safely be specified multiple times with different
<code>arg</code> values. In that case, it will be called multiple times as well.
Providing the same <code>fun</code> and <code>arg</code> values multiple times is not allowed
and will lead the process to abort.</p>
<p>The hooks will be called in reverse order, i.e. the most recently added one
will be called first.</p>
<p>Removing this hook can be done by using <code>napi_remove_env_cleanup_hook</code>.
Typically, that happens when the resource for which this hook was added
is being torn down anyway.</p>
<h4>napi_remove_env_cleanup_hook<span><a className="mark" href="#n_api_napi_remove_env_cleanup_hook" id="n_api_napi_remove_env_cleanup_hook">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v10.2.0</span>
<span>N-API version: 3</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status <span className="sh_function">napi_remove_env_cleanup_hook</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                                     <span className="sh_function">void</span> <span className="sh_symbol">(*</span>fun<span className="sh_symbol">)(</span>void<span className="sh_symbol">*</span> arg<span className="sh_symbol">),</span>
                                                     void<span className="sh_symbol">*</span> arg<span className="sh_symbol">);</span>
</code></pre>
<p>Unregisters <code>fun</code> as a function to be run with the <code>arg</code> parameter once the
current Node.js environment exits. Both the argument and the function value
need to be exact matches.</p>
<p>The function must have originally been registered
with <code>napi_add_env_cleanup_hook</code>, otherwise the process will abort.</p>
<h2>Module registration<span><a className="mark" href="#n_api_module_registration" id="n_api_module_registration">#</a></span></h2>
<p>N-API modules are registered in a manner similar to other modules
except that instead of using the <code>NODE_MODULE</code> macro the following
is used:</p>
<pre className="sh_sourceCode"><code className="language-C"><span className="sh_function">NAPI_MODULE</span><span className="sh_symbol">(</span>NODE_GYP_MODULE_NAME<span className="sh_symbol">,</span> Init<span className="sh_symbol">)</span>
</code></pre>
<p>The next difference is the signature for the <code>Init</code> method. For a N-API
module it is as follows:</p>
<pre className="sh_sourceCode"><code className="language-C">napi_value <span className="sh_function">Init</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_value exports<span className="sh_symbol">);</span>
</code></pre>
<p>The return value from <code>Init</code> is treated as the <code>exports</code> object for the module.
The <code>Init</code> method is passed an empty object via the <code>exports</code> parameter as a
convenience. If <code>Init</code> returns NULL, the parameter passed as <code>exports</code> is
exported by the module. N-API modules cannot modify the <code>module</code> object but can
specify anything as the <code>exports</code> property of the module.</p>
<p>To add the method <code>hello</code> as a function so that it can be called as a method
provided by the addon:</p>
<pre className="sh_sourceCode"><code className="language-C">napi_value <span className="sh_function">Init</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_value exports<span className="sh_symbol">)</span> <span className="sh_cbracket">{</span>
  napi_status status<span className="sh_symbol">;</span>
  napi_property_descriptor desc <span className="sh_symbol">=</span>
    <span className="sh_cbracket">{</span><span className="sh_string">"hello"</span><span className="sh_symbol">,</span> NULL<span className="sh_symbol">,</span> Method<span className="sh_symbol">,</span> NULL<span className="sh_symbol">,</span> NULL<span className="sh_symbol">,</span> NULL<span className="sh_symbol">,</span> napi_default<span className="sh_symbol">,</span> NULL<span className="sh_cbracket">}</span><span className="sh_symbol">;</span>
  status <span className="sh_symbol">=</span> <span className="sh_function">napi_define_properties</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> exports<span className="sh_symbol">,</span> <span className="sh_number">1</span><span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>desc<span className="sh_symbol">);</span>
  <span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> NULL<span className="sh_symbol">;</span>
  <span className="sh_keyword">return</span> exports<span className="sh_symbol">;</span>
<span className="sh_cbracket">}</span>
</code></pre>
<p>To set a function to be returned by the <code>require()</code> for the addon:</p>
<pre className="sh_sourceCode"><code className="language-C">napi_value <span className="sh_function">Init</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_value exports<span className="sh_symbol">)</span> <span className="sh_cbracket">{</span>
  napi_value method<span className="sh_symbol">;</span>
  napi_status status<span className="sh_symbol">;</span>
  status <span className="sh_symbol">=</span> <span className="sh_function">napi_create_function</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_string">"exports"</span><span className="sh_symbol">,</span> NAPI_AUTO_LENGTH<span className="sh_symbol">,</span> Method<span className="sh_symbol">,</span> NULL<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>method<span className="sh_symbol">);</span>
  <span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> NULL<span className="sh_symbol">;</span>
  <span className="sh_keyword">return</span> method<span className="sh_symbol">;</span>
<span className="sh_cbracket">}</span>
</code></pre>
<p>To define a class so that new instances can be created (often used with
<a href="#n_api_object_wrap">Object Wrap</a>):</p>
<pre className="sh_sourceCode"><code className="language-C"><span className="sh_comment">// NOTE: partial example, not all referenced code is included</span>
napi_value <span className="sh_function">Init</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_value exports<span className="sh_symbol">)</span> <span className="sh_cbracket">{</span>
  napi_status status<span className="sh_symbol">;</span>
  napi_property_descriptor properties<span className="sh_symbol">[]</span> <span className="sh_symbol">=</span> <span className="sh_cbracket">{</span>
    <span className="sh_cbracket">{</span> <span className="sh_string">"value"</span><span className="sh_symbol">,</span> NULL<span className="sh_symbol">,</span> NULL<span className="sh_symbol">,</span> GetValue<span className="sh_symbol">,</span> SetValue<span className="sh_symbol">,</span> NULL<span className="sh_symbol">,</span> napi_default<span className="sh_symbol">,</span> NULL <span className="sh_cbracket">}</span><span className="sh_symbol">,</span>
    <span className="sh_function">DECLARE_NAPI_METHOD</span><span className="sh_symbol">(</span><span className="sh_string">"plusOne"</span><span className="sh_symbol">,</span> PlusOne<span className="sh_symbol">),</span>
    <span className="sh_function">DECLARE_NAPI_METHOD</span><span className="sh_symbol">(</span><span className="sh_string">"multiply"</span><span className="sh_symbol">,</span> Multiply<span className="sh_symbol">),</span>
  <span className="sh_cbracket">}</span><span className="sh_symbol">;</span>
  napi_value cons<span className="sh_symbol">;</span>
  status <span className="sh_symbol">=</span>
      <span className="sh_function">napi_define_class</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_string">"MyObject"</span><span className="sh_symbol">,</span> New<span className="sh_symbol">,</span> NULL<span className="sh_symbol">,</span> <span className="sh_number">3</span><span className="sh_symbol">,</span> properties<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>cons<span className="sh_symbol">);</span>
  <span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> NULL<span className="sh_symbol">;</span>
  status <span className="sh_symbol">=</span> <span className="sh_function">napi_create_reference</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> cons<span className="sh_symbol">,</span> <span className="sh_number">1</span><span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>constructor<span className="sh_symbol">);</span>
  <span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> NULL<span className="sh_symbol">;</span>
  status <span className="sh_symbol">=</span> <span className="sh_function">napi_set_named_property</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> exports<span className="sh_symbol">,</span> <span className="sh_string">"MyObject"</span><span className="sh_symbol">,</span> cons<span className="sh_symbol">);</span>
  <span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> NULL<span className="sh_symbol">;</span>
  <span className="sh_keyword">return</span> exports<span className="sh_symbol">;</span>
<span className="sh_cbracket">}</span>
</code></pre>
<p>If the module will be loaded multiple times during the lifetime of the Node.js
process, use the <code>NAPI_MODULE_INIT</code> macro to initialize the module:</p>
<pre className="sh_sourceCode"><code className="language-C"><span className="sh_function">NAPI_MODULE_INIT</span><span className="sh_symbol">()</span> <span className="sh_cbracket">{</span>
  napi_value answer<span className="sh_symbol">;</span>
  napi_status result<span className="sh_symbol">;</span>
  status <span className="sh_symbol">=</span> <span className="sh_function">napi_create_int64</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_number">42</span><span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>answer<span className="sh_symbol">);</span>
  <span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> NULL<span className="sh_symbol">;</span>
  status <span className="sh_symbol">=</span> <span className="sh_function">napi_set_named_property</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> exports<span className="sh_symbol">,</span> <span className="sh_string">"answer"</span><span className="sh_symbol">,</span> answer<span className="sh_symbol">);</span>
  <span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> NULL<span className="sh_symbol">;</span>
  <span className="sh_keyword">return</span> exports<span className="sh_symbol">;</span>
<span className="sh_cbracket">}</span>
</code></pre>
<p>This macro includes <code>NAPI_MODULE</code>, and declares an <code>Init</code> function with a
special name and with visibility beyond the addon. This will allow Node.js to
initialize the module even if it is loaded multiple times.</p>
<p>There are a few design considerations when declaring a module that may be loaded
multiple times. The documentation of <a href="addons.html#addons_context_aware_addons">context-aware addons</a> provides more
details.</p>
<p>The variables <code>env</code> and <code>exports</code> will be available inside the function body
following the macro invocation.</p>
<p>For more details on setting properties on objects, see the section on
<a href="#n_api_working_with_javascript_properties">Working with JavaScript Properties</a>.</p>
<p>For more details on building addon modules in general, refer to the existing
API.</p>
<h2>Working with JavaScript Values<span><a className="mark" href="#n_api_working_with_javascript_values" id="n_api_working_with_javascript_values">#</a></span></h2>
<p>N-API exposes a set of APIs to create all types of JavaScript values.
Some of these types are documented under
<a href="https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values">Section 6</a>
of the <a href="https://tc39.github.io/ecma262/">ECMAScript Language Specification</a>.</p>
<p>Fundamentally, these APIs are used to do one of the following:
1. Create a new JavaScript object
2. Convert from a primitive C type to an N-API value
3. Convert from N-API value to a primitive C type
4. Get global instances including <code>undefined</code> and <code>null</code></p>
<p>N-API values are represented by the type <code>napi_value</code>.
Any N-API call that requires a JavaScript value takes in a <code>napi_value</code>.
In some cases, the API does check the type of the <code>napi_value</code> up-front.
However, for better performance, it's better for the caller to make sure that
the <code>napi_value</code> in question is of the JavaScript type expected by the API.</p>
<h3>Enum types<span><a className="mark" href="#n_api_enum_types" id="n_api_enum_types">#</a></span></h3>
<h4>napi_valuetype<span><a className="mark" href="#n_api_napi_valuetype" id="n_api_napi_valuetype">#</a></span></h4>
<pre className="sh_sourceCode"><code className="language-C">typedef <span className="sh_keyword">enum</span> <span className="sh_cbracket">{</span>
  <span className="sh_comment">// ES6 types (corresponds to typeof)</span>
  napi_undefined<span className="sh_symbol">,</span>
  napi_null<span className="sh_symbol">,</span>
  napi_boolean<span className="sh_symbol">,</span>
  napi_number<span className="sh_symbol">,</span>
  napi_string<span className="sh_symbol">,</span>
  napi_symbol<span className="sh_symbol">,</span>
  napi_object<span className="sh_symbol">,</span>
  napi_function<span className="sh_symbol">,</span>
  napi_external<span className="sh_symbol">,</span>
  napi_bigint<span className="sh_symbol">,</span>
<span className="sh_cbracket">}</span> napi_valuetype<span className="sh_symbol">;</span>
</code></pre>
<p>Describes the type of a <code>napi_value</code>. This generally corresponds to the types
described in
<a href="https://tc39.github.io/ecma262/#sec-ecmascript-language-types">Section 6.1</a> of
the ECMAScript Language Specification.
In addition to types in that section, <code>napi_valuetype</code> can also represent
<code>Function</code>s and <code>Object</code>s with external data.</p>
<p>A JavaScript value of type <code>napi_external</code> appears in JavaScript as a plain
object such that no properties can be set on it, and no prototype.</p>
<h4>napi_typedarray_type<span><a className="mark" href="#n_api_napi_typedarray_type" id="n_api_napi_typedarray_type">#</a></span></h4>
<pre className="sh_sourceCode"><code className="language-C">typedef <span className="sh_keyword">enum</span> <span className="sh_cbracket">{</span>
  napi_int8_array<span className="sh_symbol">,</span>
  napi_uint8_array<span className="sh_symbol">,</span>
  napi_uint8_clamped_array<span className="sh_symbol">,</span>
  napi_int16_array<span className="sh_symbol">,</span>
  napi_uint16_array<span className="sh_symbol">,</span>
  napi_int32_array<span className="sh_symbol">,</span>
  napi_uint32_array<span className="sh_symbol">,</span>
  napi_float32_array<span className="sh_symbol">,</span>
  napi_float64_array<span className="sh_symbol">,</span>
  napi_bigint64_array<span className="sh_symbol">,</span>
  napi_biguint64_array<span className="sh_symbol">,</span>
<span className="sh_cbracket">}</span> napi_typedarray_type<span className="sh_symbol">;</span>
</code></pre>
<p>This represents the underlying binary scalar datatype of the <code>TypedArray</code>.
Elements of this enum correspond to
<a href="https://tc39.github.io/ecma262/#sec-typedarray-objects">Section 22.2</a> of the <a href="https://tc39.github.io/ecma262/">ECMAScript Language Specification</a>.</p>
<h3>Object Creation Functions<span><a className="mark" href="#n_api_object_creation_functions" id="n_api_object_creation_functions">#</a></span></h3>
<h4>napi_create_array<span><a className="mark" href="#n_api_napi_create_array" id="n_api_napi_create_array">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_array</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the N-API call is invoked under.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing a JavaScript <code>Array</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API returns an N-API value corresponding to a JavaScript <code>Array</code> type.
JavaScript arrays are described in
<a href="https://tc39.github.io/ecma262/#sec-array-objects">Section 22.1</a> of the ECMAScript Language Specification.</p>
<h4>napi_create_array_with_length<span><a className="mark" href="#n_api_napi_create_array_with_length" id="n_api_napi_create_array_with_length">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_array_with_length</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                          size_t length<span className="sh_symbol">,</span>
                                          napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] length</code>: The initial length of the <code>Array</code>.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing a JavaScript <code>Array</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API returns an N-API value corresponding to a JavaScript <code>Array</code> type.
The <code>Array</code>'s length property is set to the passed-in length parameter.
However, the underlying buffer is not guaranteed to be pre-allocated by the VM
when the array is created - that behavior is left to the underlying VM
implementation.
If the buffer must be a contiguous block of memory that can be
directly read and/or written via C, consider using
<a href="#n_api_napi_create_external_arraybuffer"><code>napi_create_external_arraybuffer</code></a>.</p>
<p>JavaScript arrays are described in
<a href="https://tc39.github.io/ecma262/#sec-array-objects">Section 22.1</a> of the ECMAScript Language Specification.</p>
<h4>napi_create_arraybuffer<span><a className="mark" href="#n_api_napi_create_arraybuffer" id="n_api_napi_create_arraybuffer">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_arraybuffer</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                    size_t byte_length<span className="sh_symbol">,</span>
                                    void<span className="sh_symbol">**</span> data<span className="sh_symbol">,</span>
                                    napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] length</code>: The length in bytes of the array buffer to create.</li>
<li><code>[out] data</code>: Pointer to the underlying byte buffer of the <code>ArrayBuffer</code>.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing a JavaScript <code>ArrayBuffer</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API returns an N-API value corresponding to a JavaScript <code>ArrayBuffer</code>.
<code>ArrayBuffer</code>s are used to represent fixed-length binary data buffers. They are
normally used as a backing-buffer for <code>TypedArray</code> objects.
The <code>ArrayBuffer</code> allocated will have an underlying byte buffer whose size is
determined by the <code>length</code> parameter that's passed in.
The underlying buffer is optionally returned back to the caller in case the
caller wants to directly manipulate the buffer. This buffer can only be
written to directly from native code. To write to this buffer from JavaScript,
a typed array or <code>DataView</code> object would need to be created.</p>
<p>JavaScript <code>ArrayBuffer</code> objects are described in
<a href="https://tc39.github.io/ecma262/#sec-arraybuffer-objects">Section 24.1</a> of the ECMAScript Language Specification.</p>
<h4>napi_create_buffer<span><a className="mark" href="#n_api_napi_create_buffer" id="n_api_napi_create_buffer">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_buffer</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                               size_t size<span className="sh_symbol">,</span>
                               void<span className="sh_symbol">**</span> data<span className="sh_symbol">,</span>
                               napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] size</code>: Size in bytes of the underlying buffer.</li>
<li><code>[out] data</code>: Raw pointer to the underlying buffer.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing a <code>node::Buffer</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API allocates a <code>node::Buffer</code> object. While this is still a
fully-supported data structure, in most cases using a <code>TypedArray</code> will suffice.</p>
<h4>napi_create_buffer_copy<span><a className="mark" href="#n_api_napi_create_buffer_copy" id="n_api_napi_create_buffer_copy">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_buffer_copy</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                    size_t length<span className="sh_symbol">,</span>
                                    <span className="sh_keyword">const</span> void<span className="sh_symbol">*</span> data<span className="sh_symbol">,</span>
                                    void<span className="sh_symbol">**</span> result_data<span className="sh_symbol">,</span>
                                    napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] size</code>: Size in bytes of the input buffer (should be the same as the
size of the new buffer).</li>
<li><code>[in] data</code>: Raw pointer to the underlying buffer to copy from.</li>
<li><code>[out] result_data</code>: Pointer to the new <code>Buffer</code>'s underlying data buffer.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing a <code>node::Buffer</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API allocates a <code>node::Buffer</code> object and initializes it with data copied
from the passed-in buffer. While this is still a fully-supported data
structure, in most cases using a <code>TypedArray</code> will suffice.</p>
<h4>napi_create_external<span><a className="mark" href="#n_api_napi_create_external" id="n_api_napi_create_external">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_external</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                 void<span className="sh_symbol">*</span> data<span className="sh_symbol">,</span>
                                 napi_finalize finalize_cb<span className="sh_symbol">,</span>
                                 void<span className="sh_symbol">*</span> finalize_hint<span className="sh_symbol">,</span>
                                 napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] data</code>: Raw pointer to the external data.</li>
<li><code>[in] finalize_cb</code>: Optional callback to call when the external value
is being collected.</li>
<li><code>[in] finalize_hint</code>: Optional hint to pass to the finalize callback
during collection.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing an external value.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API allocates a JavaScript value with external data attached to it. This
is used to pass external data through JavaScript code, so it can be retrieved
later by native code. The API allows the caller to pass in a finalize callback,
in case the underlying native resource needs to be cleaned up when the external
JavaScript value gets collected.</p>
<p>The created value is not an object, and therefore does not support additional
properties. It is considered a distinct value type: calling <code>napi_typeof()</code> with
an external value yields <code>napi_external</code>.</p>
<h4>napi_create_external_arraybuffer<span><a className="mark" href="#n_api_napi_create_external_arraybuffer" id="n_api_napi_create_external_arraybuffer">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status
<span className="sh_function">napi_create_external_arraybuffer</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                 void<span className="sh_symbol">*</span> external_data<span className="sh_symbol">,</span>
                                 size_t byte_length<span className="sh_symbol">,</span>
                                 napi_finalize finalize_cb<span className="sh_symbol">,</span>
                                 void<span className="sh_symbol">*</span> finalize_hint<span className="sh_symbol">,</span>
                                 napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] external_data</code>: Pointer to the underlying byte buffer of the
<code>ArrayBuffer</code>.</li>
<li><code>[in] byte_length</code>: The length in bytes of the underlying buffer.</li>
<li><code>[in] finalize_cb</code>: Optional callback to call when the <code>ArrayBuffer</code> is
being collected.</li>
<li><code>[in] finalize_hint</code>: Optional hint to pass to the finalize callback
during collection.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing a JavaScript <code>ArrayBuffer</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API returns an N-API value corresponding to a JavaScript <code>ArrayBuffer</code>.
The underlying byte buffer of the <code>ArrayBuffer</code> is externally allocated and
managed. The caller must ensure that the byte buffer remains valid until the
finalize callback is called.</p>
<p>JavaScript <code>ArrayBuffer</code>s are described in
<a href="https://tc39.github.io/ecma262/#sec-arraybuffer-objects">Section 24.1</a> of the ECMAScript Language Specification.</p>
<h4>napi_create_external_buffer<span><a className="mark" href="#n_api_napi_create_external_buffer" id="n_api_napi_create_external_buffer">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_external_buffer</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                        size_t length<span className="sh_symbol">,</span>
                                        void<span className="sh_symbol">*</span> data<span className="sh_symbol">,</span>
                                        napi_finalize finalize_cb<span className="sh_symbol">,</span>
                                        void<span className="sh_symbol">*</span> finalize_hint<span className="sh_symbol">,</span>
                                        napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] length</code>: Size in bytes of the input buffer (should be the same as
the size of the new buffer).</li>
<li><code>[in] data</code>: Raw pointer to the underlying buffer to copy from.</li>
<li><code>[in] finalize_cb</code>: Optional callback to call when the <code>ArrayBuffer</code> is
being collected.</li>
<li><code>[in] finalize_hint</code>: Optional hint to pass to the finalize callback
during collection.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing a <code>node::Buffer</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API allocates a <code>node::Buffer</code> object and initializes it with data
backed by the passed in buffer. While this is still a fully-supported data
structure, in most cases using a <code>TypedArray</code> will suffice.</p>
<p>For Node.js &gt;=4 <code>Buffers</code> are <code>Uint8Array</code>s.</p>
<h4>napi_create_object<span><a className="mark" href="#n_api_napi_create_object" id="n_api_napi_create_object">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_object</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing a JavaScript <code>Object</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API allocates a default JavaScript <code>Object</code>.
It is the equivalent of doing <code>new Object()</code> in JavaScript.</p>
<p>The JavaScript <code>Object</code> type is described in
<a href="https://tc39.github.io/ecma262/#sec-object-type">Section 6.1.7</a> of the
ECMAScript Language Specification.</p>
<h4>napi_create_symbol<span><a className="mark" href="#n_api_napi_create_symbol" id="n_api_napi_create_symbol">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_symbol</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                               napi_value description<span className="sh_symbol">,</span>
                               napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] description</code>: Optional <code>napi_value</code> which refers to a JavaScript
<code>String</code> to be set as the description for the symbol.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing a JavaScript <code>Symbol</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API creates a JavaScript <code>Symbol</code> object from a UTF8-encoded C string.</p>
<p>The JavaScript <code>Symbol</code> type is described in
<a href="https://tc39.github.io/ecma262/#sec-symbol-objects">Section 19.4</a>
of the ECMAScript Language Specification.</p>
<h4>napi_create_typedarray<span><a className="mark" href="#n_api_napi_create_typedarray" id="n_api_napi_create_typedarray">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_typedarray</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                   napi_typedarray_type type<span className="sh_symbol">,</span>
                                   size_t length<span className="sh_symbol">,</span>
                                   napi_value arraybuffer<span className="sh_symbol">,</span>
                                   size_t byte_offset<span className="sh_symbol">,</span>
                                   napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] type</code>: Scalar datatype of the elements within the <code>TypedArray</code>.</li>
<li><code>[in] length</code>: Number of elements in the <code>TypedArray</code>.</li>
<li><code>[in] arraybuffer</code>: <code>ArrayBuffer</code> underlying the typed array.</li>
<li><code>[in] byte_offset</code>: The byte offset within the <code>ArrayBuffer</code> from which to
start projecting the <code>TypedArray</code>.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing a JavaScript <code>TypedArray</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API creates a JavaScript <code>TypedArray</code> object over an existing
<code>ArrayBuffer</code>. <code>TypedArray</code> objects provide an array-like view over an
underlying data buffer where each element has the same underlying binary scalar
datatype.</p>
<p>It's required that <code>(length * size_of_element) + byte_offset</code> should
be &lt;= the size in bytes of the array passed in. If not, a <code>RangeError</code> exception
is raised.</p>
<p>JavaScript <code>TypedArray</code> objects are described in
<a href="https://tc39.github.io/ecma262/#sec-typedarray-objects">Section 22.2</a> of the ECMAScript Language Specification.</p>
<h4>napi_create_dataview<span><a className="mark" href="#n_api_napi_create_dataview" id="n_api_napi_create_dataview">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.3.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_dataview</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                 size_t byte_length<span className="sh_symbol">,</span>
                                 napi_value arraybuffer<span className="sh_symbol">,</span>
                                 size_t byte_offset<span className="sh_symbol">,</span>
                                 napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] length</code>: Number of elements in the <code>DataView</code>.</li>
<li><code>[in] arraybuffer</code>: <code>ArrayBuffer</code> underlying the <code>DataView</code>.</li>
<li><code>[in] byte_offset</code>: The byte offset within the <code>ArrayBuffer</code> from which to
start projecting the <code>DataView</code>.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing a JavaScript <code>DataView</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API creates a JavaScript <code>DataView</code> object over an existing <code>ArrayBuffer</code>.
<code>DataView</code> objects provide an array-like view over an underlying data buffer,
but one which allows items of different size and type in the <code>ArrayBuffer</code>.</p>
<p>It is required that <code>byte_length + byte_offset</code> is less than or equal to the
size in bytes of the array passed in. If not, a <code>RangeError</code> exception is
raised.</p>
<p>JavaScript <code>DataView</code> objects are described in
<a href="https://tc39.github.io/ecma262/#sec-dataview-objects">Section 24.3</a> of the ECMAScript Language Specification.</p>
<h3>Functions to convert from C types to N-API<span><a className="mark" href="#n_api_functions_to_convert_from_c_types_to_n_api" id="n_api_functions_to_convert_from_c_types_to_n_api">#</a></span></h3>
<h4>napi_create_int32<span><a className="mark" href="#n_api_napi_create_int32" id="n_api_napi_create_int32">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.4.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_int32</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> int32_t value<span className="sh_symbol">,</span> napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: Integer value to be represented in JavaScript.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing a JavaScript <code>Number</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API is used to convert from the C <code>int32_t</code> type to the JavaScript
<code>Number</code> type.</p>
<p>The JavaScript <code>Number</code> type is described in
<a href="https://tc39.github.io/ecma262/#sec-ecmascript-language-types-number-type">Section 6.1.6</a> of the ECMAScript Language Specification.</p>
<h4>napi_create_uint32<span><a className="mark" href="#n_api_napi_create_uint32" id="n_api_napi_create_uint32">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.4.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_uint32</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> uint32_t value<span className="sh_symbol">,</span> napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: Unsigned integer value to be represented in JavaScript.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing a JavaScript <code>Number</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API is used to convert from the C <code>uint32_t</code> type to the JavaScript
<code>Number</code> type.</p>
<p>The JavaScript <code>Number</code> type is described in
<a href="https://tc39.github.io/ecma262/#sec-ecmascript-language-types-number-type">Section 6.1.6</a> of the ECMAScript Language Specification.</p>
<h4>napi_create_int64<span><a className="mark" href="#n_api_napi_create_int64" id="n_api_napi_create_int64">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.4.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_int64</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> int64_t value<span className="sh_symbol">,</span> napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: Integer value to be represented in JavaScript.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing a JavaScript <code>Number</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API is used to convert from the C <code>int64_t</code> type to the JavaScript
<code>Number</code> type.</p>
<p>The JavaScript <code>Number</code> type is described in <a href="https://tc39.github.io/ecma262/#sec-ecmascript-language-types-number-type">Section 6.1.6</a>
of the ECMAScript Language Specification. Note the complete range of <code>int64_t</code>
cannot be represented with full precision in JavaScript. Integer values
outside the range of
<a href="https://tc39.github.io/ecma262/#sec-number.min_safe_integer"><code>Number.MIN_SAFE_INTEGER</code></a>
-(2^53 - 1) -
<a href="https://tc39.github.io/ecma262/#sec-number.max_safe_integer"><code>Number.MAX_SAFE_INTEGER</code></a>
(2^53 - 1) will lose precision.</p>
<h4>napi_create_double<span><a className="mark" href="#n_api_napi_create_double" id="n_api_napi_create_double">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.4.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_double</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> double value<span className="sh_symbol">,</span> napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: Double-precision value to be represented in JavaScript.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing a JavaScript <code>Number</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API is used to convert from the C <code>double</code> type to the JavaScript
<code>Number</code> type.</p>
<p>The JavaScript <code>Number</code> type is described in
<a href="https://tc39.github.io/ecma262/#sec-ecmascript-language-types-number-type">Section 6.1.6</a> of the ECMAScript Language Specification.</p>
<h4>napi_create_bigint_int64<span><a className="mark" href="#n_api_napi_create_bigint_int64" id="n_api_napi_create_bigint_int64">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v10.7.0</span>
</div>
<p></p><div className="api_stability api_stability_1"><a href="documentation.html#documentation_stability_index">Stability: 1</a> - Experimental</div><p></p>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_bigint_int64</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                     int64_t value<span className="sh_symbol">,</span>
                                     napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: Integer value to be represented in JavaScript.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing a JavaScript <code>BigInt</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API converts the C <code>int64_t</code> type to the JavaScript <code>BigInt</code> type.</p>
<h4>napi_create_bigint_uint64<span><a className="mark" href="#n_api_napi_create_bigint_uint64" id="n_api_napi_create_bigint_uint64">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v10.7.0</span>
</div>
<p></p><div className="api_stability api_stability_1"><a href="documentation.html#documentation_stability_index">Stability: 1</a> - Experimental</div><p></p>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_bigint_uint64</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                      uint64_t value<span className="sh_symbol">,</span>
                                      napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: Unsigned integer value to be represented in JavaScript.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing a JavaScript <code>BigInt</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API converts the C <code>uint64_t</code> type to the JavaScript <code>BigInt</code> type.</p>
<h4>napi_create_bigint_words<span><a className="mark" href="#n_api_napi_create_bigint_words" id="n_api_napi_create_bigint_words">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v10.7.0</span>
</div>
<p></p><div className="api_stability api_stability_1"><a href="documentation.html#documentation_stability_index">Stability: 1</a> - Experimental</div><p></p>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_bigint_words</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                     int sign_bit<span className="sh_symbol">,</span>
                                     size_t word_count<span className="sh_symbol">,</span>
                                     <span className="sh_keyword">const</span> uint64_t<span className="sh_symbol">*</span> words<span className="sh_symbol">,</span>
                                     napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] sign_bit</code>: Determines if the resulting <code>BigInt</code> will be positive or
negative.</li>
<li><code>[in] word_count</code>: The length of the <code>words</code> array.</li>
<li><code>[in] words</code>: An array of <code>uint64_t</code> little-endian 64-bit words.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing a JavaScript <code>BigInt</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API converts an array of unsigned 64-bit words into a single <code>BigInt</code>
value.</p>
<p>The resulting <code>BigInt</code> is calculated as: (–1)<sup><code>sign_bit</code></sup> (<code>words[0]</code>
× (2<sup>64</sup>)<sup>0</sup> + <code>words[1]</code> × (2<sup>64</sup>)<sup>1</sup> + …)</p>
<h4>napi_create_string_latin1<span><a className="mark" href="#n_api_napi_create_string_latin1" id="n_api_napi_create_string_latin1">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_string_latin1</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                      <span className="sh_keyword">const</span> char<span className="sh_symbol">*</span> str<span className="sh_symbol">,</span>
                                      size_t length<span className="sh_symbol">,</span>
                                      napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] str</code>: Character buffer representing an ISO-8859-1-encoded string.</li>
<li><code>[in] length</code>: The length of the string in bytes, or
<code>NAPI_AUTO_LENGTH</code> if it is null-terminated.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing a JavaScript <code>String</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API creates a JavaScript <code>String</code> object from an ISO-8859-1-encoded C
string. The native string is copied.</p>
<p>The JavaScript <code>String</code> type is described in
<a href="https://tc39.github.io/ecma262/#sec-ecmascript-language-types-string-type">Section 6.1.4</a> of the ECMAScript Language Specification.</p>
<h4>napi_create_string_utf16<span><a className="mark" href="#n_api_napi_create_string_utf16" id="n_api_napi_create_string_utf16">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_string_utf16</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                     <span className="sh_keyword">const</span> char16_t<span className="sh_symbol">*</span> str<span className="sh_symbol">,</span>
                                     size_t length<span className="sh_symbol">,</span>
                                     napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] str</code>: Character buffer representing a UTF16-LE-encoded string.</li>
<li><code>[in] length</code>: The length of the string in two-byte code units, or
<code>NAPI_AUTO_LENGTH</code> if it is null-terminated.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing a JavaScript <code>String</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API creates a JavaScript <code>String</code> object from a UTF16-LE-encoded C string.
The native string is copied.</p>
<p>The JavaScript <code>String</code> type is described in
<a href="https://tc39.github.io/ecma262/#sec-ecmascript-language-types-string-type">Section 6.1.4</a> of the ECMAScript Language Specification.</p>
<h4>napi_create_string_utf8<span><a className="mark" href="#n_api_napi_create_string_utf8" id="n_api_napi_create_string_utf8">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_string_utf8</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                    <span className="sh_keyword">const</span> char<span className="sh_symbol">*</span> str<span className="sh_symbol">,</span>
                                    size_t length<span className="sh_symbol">,</span>
                                    napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] str</code>: Character buffer representing a UTF8-encoded string.</li>
<li><code>[in] length</code>: The length of the string in bytes, or <code>NAPI_AUTO_LENGTH</code>
if it is null-terminated.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing a JavaScript <code>String</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API creates a JavaScript <code>String</code> object from a UTF8-encoded C string.
The native string is copied.</p>
<p>The JavaScript <code>String</code> type is described in
<a href="https://tc39.github.io/ecma262/#sec-ecmascript-language-types-string-type">Section 6.1.4</a> of the ECMAScript Language Specification.</p>
<h3>Functions to convert from N-API to C types<span><a className="mark" href="#n_api_functions_to_convert_from_n_api_to_c_types" id="n_api_functions_to_convert_from_n_api_to_c_types">#</a></span></h3>
<h4>napi_get_array_length<span><a className="mark" href="#n_api_napi_get_array_length" id="n_api_napi_get_array_length">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_array_length</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                  napi_value value<span className="sh_symbol">,</span>
                                  uint32_t<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: <code>napi_value</code> representing the JavaScript <code>Array</code> whose length is
being queried.</li>
<li><code>[out] result</code>: <code>uint32</code> representing length of the array.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API returns the length of an array.</p>
<p><code>Array</code> length is described in
<a href="https://tc39.github.io/ecma262/#sec-properties-of-array-instances-length">Section 22.1.4.1</a>
of the ECMAScript Language Specification.</p>
<h4>napi_get_arraybuffer_info<span><a className="mark" href="#n_api_napi_get_arraybuffer_info" id="n_api_napi_get_arraybuffer_info">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_arraybuffer_info</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                      napi_value arraybuffer<span className="sh_symbol">,</span>
                                      void<span className="sh_symbol">**</span> data<span className="sh_symbol">,</span>
                                      size_t<span className="sh_symbol">*</span> byte_length<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] arraybuffer</code>: <code>napi_value</code> representing the <code>ArrayBuffer</code> being queried.</li>
<li><code>[out] data</code>: The underlying data buffer of the <code>ArrayBuffer</code>.</li>
<li><code>[out] byte_length</code>: Length in bytes of the underlying data buffer.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API is used to retrieve the underlying data buffer of an <code>ArrayBuffer</code> and
its length.</p>
<p><em>WARNING</em>: Use caution while using this API. The lifetime of the underlying data
buffer is managed by the <code>ArrayBuffer</code> even after it's returned. A
possible safe way to use this API is in conjunction with
<a href="#n_api_napi_create_reference"><code>napi_create_reference</code></a>, which can be used to guarantee control over the
lifetime of the <code>ArrayBuffer</code>. It's also safe to use the returned data buffer
within the same callback as long as there are no calls to other APIs that might
trigger a GC.</p>
<h4>napi_get_buffer_info<span><a className="mark" href="#n_api_napi_get_buffer_info" id="n_api_napi_get_buffer_info">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_buffer_info</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                 napi_value value<span className="sh_symbol">,</span>
                                 void<span className="sh_symbol">**</span> data<span className="sh_symbol">,</span>
                                 size_t<span className="sh_symbol">*</span> length<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: <code>napi_value</code> representing the <code>node::Buffer</code> being queried.</li>
<li><code>[out] data</code>: The underlying data buffer of the <code>node::Buffer</code>.</li>
<li><code>[out] length</code>: Length in bytes of the underlying data buffer.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API is used to retrieve the underlying data buffer of a <code>node::Buffer</code>
and it's length.</p>
<p><em>Warning</em>: Use caution while using this API since the underlying data buffer's
lifetime is not guaranteed if it's managed by the VM.</p>
<h4>napi_get_prototype<span><a className="mark" href="#n_api_napi_get_prototype" id="n_api_napi_get_prototype">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_prototype</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                               napi_value object<span className="sh_symbol">,</span>
                               napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] object</code>: <code>napi_value</code> representing JavaScript <code>Object</code> whose prototype
to return. This returns the equivalent of <code>Object.getPrototypeOf</code> (which is
not the same as the function's <code>prototype</code> property).</li>
<li><code>[out] result</code>: <code>napi_value</code> representing prototype of the given object.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<h4>napi_get_typedarray_info<span><a className="mark" href="#n_api_napi_get_typedarray_info" id="n_api_napi_get_typedarray_info">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_typedarray_info</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                     napi_value typedarray<span className="sh_symbol">,</span>
                                     napi_typedarray_type<span className="sh_symbol">*</span> type<span className="sh_symbol">,</span>
                                     size_t<span className="sh_symbol">*</span> length<span className="sh_symbol">,</span>
                                     void<span className="sh_symbol">**</span> data<span className="sh_symbol">,</span>
                                     napi_value<span className="sh_symbol">*</span> arraybuffer<span className="sh_symbol">,</span>
                                     size_t<span className="sh_symbol">*</span> byte_offset<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] typedarray</code>: <code>napi_value</code> representing the <code>TypedArray</code> whose
properties to query.</li>
<li><code>[out] type</code>: Scalar datatype of the elements within the <code>TypedArray</code>.</li>
<li><code>[out] length</code>: The number of elements in the <code>TypedArray</code>.</li>
<li><code>[out] data</code>: The data buffer underlying the <code>TypedArray</code> adjusted by
the <code>byte_offset</code> value so that it points to the first element in the
<code>TypedArray</code>.</li>
<li><code>[out] arraybuffer</code>: The <code>ArrayBuffer</code> underlying the <code>TypedArray</code>.</li>
<li><code>[out] byte_offset</code>: The byte offset within the underlying native array
at which the first element of the arrays is located. The value for the data
parameter has already been adjusted so that data points to the first element
in the array. Therefore, the first byte of the native array would be at
data - <code>byte_offset</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API returns various properties of a typed array.</p>
<p><em>Warning</em>: Use caution while using this API since the underlying data buffer
is managed by the VM.</p>
<h4>napi_get_dataview_info<span><a className="mark" href="#n_api_napi_get_dataview_info" id="n_api_napi_get_dataview_info">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.3.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_dataview_info</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                   napi_value dataview<span className="sh_symbol">,</span>
                                   size_t<span className="sh_symbol">*</span> byte_length<span className="sh_symbol">,</span>
                                   void<span className="sh_symbol">**</span> data<span className="sh_symbol">,</span>
                                   napi_value<span className="sh_symbol">*</span> arraybuffer<span className="sh_symbol">,</span>
                                   size_t<span className="sh_symbol">*</span> byte_offset<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] dataview</code>: <code>napi_value</code> representing the <code>DataView</code> whose
properties to query.</li>
<li><code>[out] byte_length</code>: <code>Number</code> of bytes in the <code>DataView</code>.</li>
<li><code>[out] data</code>: The data buffer underlying the <code>DataView</code>.</li>
<li><code>[out] arraybuffer</code>: <code>ArrayBuffer</code> underlying the <code>DataView</code>.</li>
<li><code>[out] byte_offset</code>: The byte offset within the data buffer from which
to start projecting the <code>DataView</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API returns various properties of a <code>DataView</code>.</p>
<h4>napi_get_value_bool<span><a className="mark" href="#n_api_napi_get_value_bool" id="n_api_napi_get_value_bool">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_value_bool</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_value value<span className="sh_symbol">,</span> bool<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: <code>napi_value</code> representing JavaScript <code>Boolean</code>.</li>
<li><code>[out] result</code>: C boolean primitive equivalent of the given JavaScript
<code>Boolean</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded. If a non-boolean <code>napi_value</code> is
passed in it returns <code>napi_boolean_expected</code>.</p>
<p>This API returns the C boolean primitive equivalent of the given JavaScript
<code>Boolean</code>.</p>
<h4>napi_get_value_double<span><a className="mark" href="#n_api_napi_get_value_double" id="n_api_napi_get_value_double">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_value_double</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                  napi_value value<span className="sh_symbol">,</span>
                                  double<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: <code>napi_value</code> representing JavaScript <code>Number</code>.</li>
<li><code>[out] result</code>: C double primitive equivalent of the given JavaScript
<code>Number</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded. If a non-number <code>napi_value</code> is passed
in it returns <code>napi_number_expected</code>.</p>
<p>This API returns the C double primitive equivalent of the given JavaScript
<code>Number</code>.</p>
<h4>napi_get_value_bigint_int64<span><a className="mark" href="#n_api_napi_get_value_bigint_int64" id="n_api_napi_get_value_bigint_int64">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v10.7.0</span>
</div>
<p></p><div className="api_stability api_stability_1"><a href="documentation.html#documentation_stability_index">Stability: 1</a> - Experimental</div><p></p>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_value_bigint_int64</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                        napi_value value<span className="sh_symbol">,</span>
                                        int64_t<span className="sh_symbol">*</span> result<span className="sh_symbol">,</span>
                                        bool<span className="sh_symbol">*</span> lossless<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under</li>
<li><code>[in] value</code>: <code>napi_value</code> representing JavaScript <code>BigInt</code>.</li>
<li><code>[out] result</code>: C <code>int64_t</code> primitive equivalent of the given JavaScript
<code>BigInt</code>.</li>
<li><code>[out] lossless</code>: Indicates whether the <code>BigInt</code> value was converted
losslessly.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded. If a non-<code>BigInt</code> is passed in it
returns <code>napi_bigint_expected</code>.</p>
<p>This API returns the C <code>int64_t</code> primitive equivalent of the given JavaScript
<code>BigInt</code>. If needed it will truncate the value, setting <code>lossless</code> to <code>false</code>.</p>
<h4>napi_get_value_bigint_uint64<span><a className="mark" href="#n_api_napi_get_value_bigint_uint64" id="n_api_napi_get_value_bigint_uint64">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v10.7.0</span>
</div>
<p></p><div className="api_stability api_stability_1"><a href="documentation.html#documentation_stability_index">Stability: 1</a> - Experimental</div><p></p>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_value_bigint_uint64</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                        napi_value value<span className="sh_symbol">,</span>
                                        uint64_t<span className="sh_symbol">*</span> result<span className="sh_symbol">,</span>
                                        bool<span className="sh_symbol">*</span> lossless<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: <code>napi_value</code> representing JavaScript <code>BigInt</code>.</li>
<li><code>[out] result</code>: C <code>uint64_t</code> primitive equivalent of the given JavaScript
<code>BigInt</code>.</li>
<li><code>[out] lossless</code>: Indicates whether the <code>BigInt</code> value was converted
losslessly.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded. If a non-<code>BigInt</code> is passed in it
returns <code>napi_bigint_expected</code>.</p>
<p>This API returns the C <code>uint64_t</code> primitive equivalent of the given JavaScript
<code>BigInt</code>. If needed it will truncate the value, setting <code>lossless</code> to <code>false</code>.</p>
<h4>napi_get_value_bigint_words<span><a className="mark" href="#n_api_napi_get_value_bigint_words" id="n_api_napi_get_value_bigint_words">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v10.7.0</span>
</div>
<p></p><div className="api_stability api_stability_1"><a href="documentation.html#documentation_stability_index">Stability: 1</a> - Experimental</div><p></p>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_value_bigint_words</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                        napi_value value<span className="sh_symbol">,</span>
                                        size_t<span className="sh_symbol">*</span> word_count<span className="sh_symbol">,</span>
                                        int<span className="sh_symbol">*</span> sign_bit<span className="sh_symbol">,</span>
                                        uint64_t<span className="sh_symbol">*</span> words<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: <code>napi_value</code> representing JavaScript <code>BigInt</code>.</li>
<li><code>[out] sign_bit</code>: Integer representing if the JavaScript <code>BigInt</code> is positive
or negative.</li>
<li><code>[in/out] word_count</code>: Must be initialized to the length of the <code>words</code>
array. Upon return, it will be set to the actual number of words that
would be needed to store this <code>BigInt</code>.</li>
<li><code>[out] words</code>: Pointer to a pre-allocated 64-bit word array.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API converts a single <code>BigInt</code> value into a sign bit, 64-bit little-endian
array, and the number of elements in the array. <code>sign_bit</code> and <code>words</code> may be
both set to <code>NULL</code>, in order to get only <code>word_count</code>.</p>
<h4>napi_get_value_external<span><a className="mark" href="#n_api_napi_get_value_external" id="n_api_napi_get_value_external">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_value_external</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                    napi_value value<span className="sh_symbol">,</span>
                                    void<span className="sh_symbol">**</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: <code>napi_value</code> representing JavaScript external value.</li>
<li><code>[out] result</code>: Pointer to the data wrapped by the JavaScript external value.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded. If a non-external <code>napi_value</code> is
passed in it returns <code>napi_invalid_arg</code>.</p>
<p>This API retrieves the external data pointer that was previously passed to
<code>napi_create_external()</code>.</p>
<h4>napi_get_value_int32<span><a className="mark" href="#n_api_napi_get_value_int32" id="n_api_napi_get_value_int32">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_value_int32</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                 napi_value value<span className="sh_symbol">,</span>
                                 int32_t<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: <code>napi_value</code> representing JavaScript <code>Number</code>.</li>
<li><code>[out] result</code>: C <code>int32</code> primitive equivalent of the given JavaScript
<code>Number</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded. If a non-number <code>napi_value</code>
is passed in <code>napi_number_expected</code>.</p>
<p>This API returns the C <code>int32</code> primitive equivalent
of the given JavaScript <code>Number</code>.</p>
<p>If the number exceeds the range of the 32 bit integer, then the result is
truncated to the equivalent of the bottom 32 bits. This can result in a large
positive number becoming a negative number if the value is &gt; 2^31 -1.</p>
<p>Non-finite number values (<code>NaN</code>, <code>+Infinity</code>, or <code>-Infinity</code>) set the
result to zero.</p>
<h4>napi_get_value_int64<span><a className="mark" href="#n_api_napi_get_value_int64" id="n_api_napi_get_value_int64">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_value_int64</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                 napi_value value<span className="sh_symbol">,</span>
                                 int64_t<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: <code>napi_value</code> representing JavaScript <code>Number</code>.</li>
<li><code>[out] result</code>: C <code>int64</code> primitive equivalent of the given JavaScript
<code>Number</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded. If a non-number <code>napi_value</code>
is passed in it returns <code>napi_number_expected</code>.</p>
<p>This API returns the C <code>int64</code> primitive equivalent of the given JavaScript
<code>Number</code>.</p>
<p><code>Number</code> values outside the range of
<a href="https://tc39.github.io/ecma262/#sec-number.min_safe_integer"><code>Number.MIN_SAFE_INTEGER</code></a>
-(2^53 - 1) -
<a href="https://tc39.github.io/ecma262/#sec-number.max_safe_integer"><code>Number.MAX_SAFE_INTEGER</code></a>
(2^53 - 1) will lose precision.</p>
<p>Non-finite number values (<code>NaN</code>, <code>+Infinity</code>, or <code>-Infinity</code>) set the
result to zero.</p>
<h4>napi_get_value_string_latin1<span><a className="mark" href="#n_api_napi_get_value_string_latin1" id="n_api_napi_get_value_string_latin1">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_value_string_latin1</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                         napi_value value<span className="sh_symbol">,</span>
                                         char<span className="sh_symbol">*</span> buf<span className="sh_symbol">,</span>
                                         size_t bufsize<span className="sh_symbol">,</span>
                                         size_t<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: <code>napi_value</code> representing JavaScript string.</li>
<li><code>[in] buf</code>: Buffer to write the ISO-8859-1-encoded string into. If NULL is
passed in, the length of the string (in bytes) is returned.</li>
<li><code>[in] bufsize</code>: Size of the destination buffer. When this value is
insufficient, the returned string will be truncated.</li>
<li><code>[out] result</code>: Number of bytes copied into the buffer, excluding the null
terminator.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded. If a non-<code>String</code> <code>napi_value</code>
is passed in it returns <code>napi_string_expected</code>.</p>
<p>This API returns the ISO-8859-1-encoded string corresponding the value passed
in.</p>
<h4>napi_get_value_string_utf8<span><a className="mark" href="#n_api_napi_get_value_string_utf8" id="n_api_napi_get_value_string_utf8">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_value_string_utf8</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                       napi_value value<span className="sh_symbol">,</span>
                                       char<span className="sh_symbol">*</span> buf<span className="sh_symbol">,</span>
                                       size_t bufsize<span className="sh_symbol">,</span>
                                       size_t<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: <code>napi_value</code> representing JavaScript string.</li>
<li><code>[in] buf</code>: Buffer to write the UTF8-encoded string into. If NULL is passed
in, the length of the string (in bytes) is returned.</li>
<li><code>[in] bufsize</code>: Size of the destination buffer. When this value is
insufficient, the returned string will be truncated.</li>
<li><code>[out] result</code>: Number of bytes copied into the buffer, excluding the null
terminator.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded. If a non-<code>String</code> <code>napi_value</code>
is passed in it returns <code>napi_string_expected</code>.</p>
<p>This API returns the UTF8-encoded string corresponding the value passed in.</p>
<h4>napi_get_value_string_utf16<span><a className="mark" href="#n_api_napi_get_value_string_utf16" id="n_api_napi_get_value_string_utf16">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_value_string_utf16</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                        napi_value value<span className="sh_symbol">,</span>
                                        char16_t<span className="sh_symbol">*</span> buf<span className="sh_symbol">,</span>
                                        size_t bufsize<span className="sh_symbol">,</span>
                                        size_t<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: <code>napi_value</code> representing JavaScript string.</li>
<li><code>[in] buf</code>: Buffer to write the UTF16-LE-encoded string into. If NULL is
passed in, the length of the string (in 2-byte code units) is returned.</li>
<li><code>[in] bufsize</code>: Size of the destination buffer. When this value is
insufficient, the returned string will be truncated.</li>
<li><code>[out] result</code>: Number of 2-byte code units copied into the buffer, excluding
the null terminator.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded. If a non-<code>String</code> <code>napi_value</code>
is passed in it returns <code>napi_string_expected</code>.</p>
<p>This API returns the UTF16-encoded string corresponding the value passed in.</p>
<h4>napi_get_value_uint32<span><a className="mark" href="#n_api_napi_get_value_uint32" id="n_api_napi_get_value_uint32">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_value_uint32</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                  napi_value value<span className="sh_symbol">,</span>
                                  uint32_t<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: <code>napi_value</code> representing JavaScript <code>Number</code>.</li>
<li><code>[out] result</code>: C primitive equivalent of the given <code>napi_value</code> as a
<code>uint32_t</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded. If a non-number <code>napi_value</code>
is passed in it returns <code>napi_number_expected</code>.</p>
<p>This API returns the C primitive equivalent of the given <code>napi_value</code> as a
<code>uint32_t</code>.</p>
<h3>Functions to get global instances<span><a className="mark" href="#n_api_functions_to_get_global_instances" id="n_api_functions_to_get_global_instances">#</a></span></h3>
<h4>napi_get_boolean<span><a className="mark" href="#n_api_napi_get_boolean" id="n_api_napi_get_boolean">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_boolean</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> bool value<span className="sh_symbol">,</span> napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: The value of the boolean to retrieve.</li>
<li><code>[out] result</code>: <code>napi_value</code> representing JavaScript <code>Boolean</code> singleton to
retrieve.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API is used to return the JavaScript singleton object that is used to
represent the given boolean value.</p>
<h4>napi_get_global<span><a className="mark" href="#n_api_napi_get_global" id="n_api_napi_get_global">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_global</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[out] result</code>: <code>napi_value</code> representing JavaScript <code>global</code> object.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API returns the <code>global</code> object.</p>
<h4>napi_get_null<span><a className="mark" href="#n_api_napi_get_null" id="n_api_napi_get_null">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_null</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[out] result</code>: <code>napi_value</code> representing JavaScript <code>null</code> object.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API returns the <code>null</code> object.</p>
<h4>napi_get_undefined<span><a className="mark" href="#n_api_napi_get_undefined" id="n_api_napi_get_undefined">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_undefined</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[out] result</code>: <code>napi_value</code> representing JavaScript Undefined value.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API returns the Undefined object.</p>
<h2>Working with JavaScript Values - Abstract Operations<span><a className="mark" href="#n_api_working_with_javascript_values_abstract_operations" id="n_api_working_with_javascript_values_abstract_operations">#</a></span></h2>
<p>N-API exposes a set of APIs to perform some abstract operations on JavaScript
values. Some of these operations are documented under
<a href="https://tc39.github.io/ecma262/#sec-abstract-operations">Section 7</a>
of the <a href="https://tc39.github.io/ecma262/">ECMAScript Language Specification</a>.</p>
<p>These APIs support doing one of the following:
1. Coerce JavaScript values to specific JavaScript types (such as <code>Number</code> or
<code>String</code>).
2. Check the type of a JavaScript value.
3. Check for equality between two JavaScript values.</p>
<h3>napi_coerce_to_bool<span><a className="mark" href="#n_api_napi_coerce_to_bool" id="n_api_napi_coerce_to_bool">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_coerce_to_bool</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                napi_value value<span className="sh_symbol">,</span>
                                napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: The JavaScript value to coerce.</li>
<li><code>[out] result</code>: <code>napi_value</code> representing the coerced JavaScript <code>Boolean</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API implements the abstract operation <code>ToBoolean()</code> as defined in
<a href="https://tc39.github.io/ecma262/#sec-toboolean">Section 7.1.2</a>
of the ECMAScript Language Specification.
This API can be re-entrant if getters are defined on the passed-in <code>Object</code>.</p>
<h3>napi_coerce_to_number<span><a className="mark" href="#n_api_napi_coerce_to_number" id="n_api_napi_coerce_to_number">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_coerce_to_number</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                  napi_value value<span className="sh_symbol">,</span>
                                  napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: The JavaScript value to coerce.</li>
<li><code>[out] result</code>: <code>napi_value</code> representing the coerced JavaScript <code>Number</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API implements the abstract operation <code>ToNumber()</code> as defined in
<a href="https://tc39.github.io/ecma262/#sec-tonumber">Section 7.1.3</a>
of the ECMAScript Language Specification.
This API can be re-entrant if getters are defined on the passed-in <code>Object</code>.</p>
<h3>napi_coerce_to_object<span><a className="mark" href="#n_api_napi_coerce_to_object" id="n_api_napi_coerce_to_object">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_coerce_to_object</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                  napi_value value<span className="sh_symbol">,</span>
                                  napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: The JavaScript value to coerce.</li>
<li><code>[out] result</code>: <code>napi_value</code> representing the coerced JavaScript <code>Object</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API implements the abstract operation <code>ToObject()</code> as defined in
<a href="https://tc39.github.io/ecma262/#sec-toobject">Section 7.1.13</a>
of the ECMAScript Language Specification.
This API can be re-entrant if getters are defined on the passed-in <code>Object</code>.</p>
<h3>napi_coerce_to_string<span><a className="mark" href="#n_api_napi_coerce_to_string" id="n_api_napi_coerce_to_string">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_coerce_to_string</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                  napi_value value<span className="sh_symbol">,</span>
                                  napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: The JavaScript value to coerce.</li>
<li><code>[out] result</code>: <code>napi_value</code> representing the coerced JavaScript <code>String</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API implements the abstract operation <code>ToString()</code> as defined in
<a href="https://tc39.github.io/ecma262/#sec-tostring">Section 7.1.13</a>
of the ECMAScript Language Specification.
This API can be re-entrant if getters are defined on the passed-in <code>Object</code>.</p>
<h3>napi_typeof<span><a className="mark" href="#n_api_napi_typeof" id="n_api_napi_typeof">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_typeof</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_value value<span className="sh_symbol">,</span> napi_valuetype<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: The JavaScript value whose type to query.</li>
<li><code>[out] result</code>: The type of the JavaScript value.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<ul>
<li><code>napi_invalid_arg</code> if the type of <code>value</code> is not a known ECMAScript type and
<code>value</code> is not an External value.</li>
</ul>
<p>This API represents behavior similar to invoking the <code>typeof</code> Operator on
the object as defined in <a href="https://tc39.github.io/ecma262/#sec-typeof-operator">Section 12.5.5</a> of the ECMAScript Language
Specification. However, it has support for detecting an External value.
If <code>value</code> has a type that is invalid, an error is returned.</p>
<h3>napi_instanceof<span><a className="mark" href="#n_api_napi_instanceof" id="n_api_napi_instanceof">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_instanceof</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                            napi_value object<span className="sh_symbol">,</span>
                            napi_value constructor<span className="sh_symbol">,</span>
                            bool<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] object</code>: The JavaScript value to check.</li>
<li><code>[in] constructor</code>: The JavaScript function object of the constructor
function to check against.</li>
<li><code>[out] result</code>: Boolean that is set to true if <code>object instanceof constructor</code>
is true.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API represents invoking the <code>instanceof</code> Operator on the object as
defined in
<a href="https://tc39.github.io/ecma262/#sec-instanceofoperator">Section 12.10.4</a>
of the ECMAScript Language Specification.</p>
<h3>napi_is_array<span><a className="mark" href="#n_api_napi_is_array" id="n_api_napi_is_array">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_is_array</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_value value<span className="sh_symbol">,</span> bool<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: The JavaScript value to check.</li>
<li><code>[out] result</code>: Whether the given object is an array.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API represents invoking the <code>IsArray</code> operation on the object
as defined in <a href="https://tc39.github.io/ecma262/#sec-isarray">Section 7.2.2</a>
of the ECMAScript Language Specification.</p>
<h3>napi_is_arraybuffer<span><a className="mark" href="#n_api_napi_is_arraybuffer" id="n_api_napi_is_arraybuffer">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_is_arraybuffer</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_value value<span className="sh_symbol">,</span> bool<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: The JavaScript value to check.</li>
<li><code>[out] result</code>: Whether the given object is an <code>ArrayBuffer</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API checks if the <code>Object</code> passed in is an array buffer.</p>
<h3>napi_is_buffer<span><a className="mark" href="#n_api_napi_is_buffer" id="n_api_napi_is_buffer">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_is_buffer</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_value value<span className="sh_symbol">,</span> bool<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: The JavaScript value to check.</li>
<li><code>[out] result</code>: Whether the given <code>napi_value</code> represents a <code>node::Buffer</code>
object.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API checks if the <code>Object</code> passed in is a buffer.</p>
<h3>napi_is_error<span><a className="mark" href="#n_api_napi_is_error_1" id="n_api_napi_is_error_1">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_is_error</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_value value<span className="sh_symbol">,</span> bool<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: The JavaScript value to check.</li>
<li><code>[out] result</code>: Whether the given <code>napi_value</code> represents an <code>Error</code> object.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API checks if the <code>Object</code> passed in is an <code>Error</code>.</p>
<h3>napi_is_typedarray<span><a className="mark" href="#n_api_napi_is_typedarray" id="n_api_napi_is_typedarray">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_is_typedarray</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_value value<span className="sh_symbol">,</span> bool<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: The JavaScript value to check.</li>
<li><code>[out] result</code>: Whether the given <code>napi_value</code> represents a <code>TypedArray</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API checks if the <code>Object</code> passed in is a typed array.</p>
<h3>napi_is_dataview<span><a className="mark" href="#n_api_napi_is_dataview" id="n_api_napi_is_dataview">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.3.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_is_dataview</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_value value<span className="sh_symbol">,</span> bool<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] value</code>: The JavaScript value to check.</li>
<li><code>[out] result</code>: Whether the given <code>napi_value</code> represents a <code>DataView</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API checks if the <code>Object</code> passed in is a <code>DataView</code>.</p>
<h3>napi_strict_equals<span><a className="mark" href="#n_api_napi_strict_equals" id="n_api_napi_strict_equals">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_strict_equals</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                               napi_value lhs<span className="sh_symbol">,</span>
                               napi_value rhs<span className="sh_symbol">,</span>
                               bool<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] lhs</code>: The JavaScript value to check.</li>
<li><code>[in] rhs</code>: The JavaScript value to check against.</li>
<li><code>[out] result</code>: Whether the two <code>napi_value</code> objects are equal.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API represents the invocation of the Strict Equality algorithm as
defined in
<a href="https://tc39.github.io/ecma262/#sec-strict-equality-comparison">Section 7.2.14</a>
of the ECMAScript Language Specification.</p>
<h2>Working with JavaScript Properties<span><a className="mark" href="#n_api_working_with_javascript_properties" id="n_api_working_with_javascript_properties">#</a></span></h2>
<p>N-API exposes a set of APIs to get and set properties on JavaScript
objects. Some of these types are documented under
<a href="https://tc39.github.io/ecma262/#sec-operations-on-objects">Section 7</a> of the
<a href="https://tc39.github.io/ecma262/">ECMAScript Language Specification</a>.</p>
<p>Properties in JavaScript are represented as a tuple of a key and a value.
Fundamentally, all property keys in N-API can be represented in one of the
following forms:</p>
<ul>
<li>Named: a simple UTF8-encoded string</li>
<li>Integer-Indexed: an index value represented by <code>uint32_t</code></li>
<li>JavaScript value: these are represented in N-API by <code>napi_value</code>. This can
be a <code>napi_value</code> representing a <code>String</code>, <code>Number</code>, or <code>Symbol</code>.</li>
</ul>
<p>N-API values are represented by the type <code>napi_value</code>.
Any N-API call that requires a JavaScript value takes in a <code>napi_value</code>.
However, it's the caller's responsibility to make sure that the
<code>napi_value</code> in question is of the JavaScript type expected by the API.</p>
<p>The APIs documented in this section provide a simple interface to
get and set properties on arbitrary JavaScript objects represented by
<code>napi_value</code>.</p>
<p>For instance, consider the following JavaScript code snippet:</p>
<pre className="sh_sourceCode"><code className="language-js"><span className="sh_keyword">const</span> obj <span className="sh_symbol">=</span> <span className="sh_cbracket">{}</span><span className="sh_symbol">;</span>
obj<span className="sh_symbol">.</span>myProp <span className="sh_symbol">=</span> <span className="sh_number">123</span><span className="sh_symbol">;</span>
</code></pre>
<p>The equivalent can be done using N-API values with the following snippet:</p>
<pre className="sh_sourceCode"><code className="language-C">napi_status status <span className="sh_symbol">=</span> napi_generic_failure<span className="sh_symbol">;</span>
<span className="sh_comment">// const obj = {}</span>
napi_value obj<span className="sh_symbol">,</span> value<span className="sh_symbol">;</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_create_object</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>obj<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> status<span className="sh_symbol">;</span>
<span className="sh_comment">// Create a napi_value for 123</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_create_int32</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_number">123</span><span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>value<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> status<span className="sh_symbol">;</span>
<span className="sh_comment">// obj.myProp = 123</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_set_named_property</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> obj<span className="sh_symbol">,</span> <span className="sh_string">"myProp"</span><span className="sh_symbol">,</span> value<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> status<span className="sh_symbol">;</span>
</code></pre>
<p>Indexed properties can be set in a similar manner. Consider the following
JavaScript snippet:</p>
<pre className="sh_sourceCode"><code className="language-js"><span className="sh_keyword">const</span> arr <span className="sh_symbol">=</span> <span className="sh_symbol">[];</span>
arr<span className="sh_symbol">[</span><span className="sh_number">123</span><span className="sh_symbol">]</span> <span className="sh_symbol">=</span> <span className="sh_string">'hello'</span><span className="sh_symbol">;</span>
</code></pre>
<p>The equivalent can be done using N-API values with the following snippet:</p>
<pre className="sh_sourceCode"><code className="language-C">napi_status status <span className="sh_symbol">=</span> napi_generic_failure<span className="sh_symbol">;</span>
<span className="sh_comment">// const arr = [];</span>
napi_value arr<span className="sh_symbol">,</span> value<span className="sh_symbol">;</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_create_array</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>arr<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> status<span className="sh_symbol">;</span>
<span className="sh_comment">// Create a napi_value for 'hello'</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_create_string_utf8</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_string">"hello"</span><span className="sh_symbol">,</span> NAPI_AUTO_LENGTH<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>value<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> status<span className="sh_symbol">;</span>
<span className="sh_comment">// arr[123] = 'hello';</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_set_element</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> arr<span className="sh_symbol">,</span> <span className="sh_number">123</span><span className="sh_symbol">,</span> value<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> status<span className="sh_symbol">;</span>
</code></pre>
<p>Properties can be retrieved using the APIs described in this section.
Consider the following JavaScript snippet:</p>
<pre className="sh_sourceCode"><code className="language-js"><span className="sh_keyword">const</span> arr <span className="sh_symbol">=</span> <span className="sh_symbol">[];</span>
<span className="sh_keyword">const</span> value <span className="sh_symbol">=</span> arr<span className="sh_symbol">[</span><span className="sh_number">123</span><span className="sh_symbol">];</span>
</code></pre>
<p>The following is the approximate equivalent of the N-API counterpart:</p>
<pre className="sh_sourceCode"><code className="language-C">napi_status status <span className="sh_symbol">=</span> napi_generic_failure<span className="sh_symbol">;</span>
<span className="sh_comment">// const arr = []</span>
napi_value arr<span className="sh_symbol">,</span> value<span className="sh_symbol">;</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_create_array</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>arr<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> status<span className="sh_symbol">;</span>
<span className="sh_comment">// const value = arr[123]</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_get_element</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> arr<span className="sh_symbol">,</span> <span className="sh_number">123</span><span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>value<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> status<span className="sh_symbol">;</span>
</code></pre>
<p>Finally, multiple properties can also be defined on an object for performance
reasons. Consider the following JavaScript:</p>
<pre className="sh_sourceCode"><code className="language-js"><span className="sh_keyword">const</span> obj <span className="sh_symbol">=</span> <span className="sh_cbracket">{}</span><span className="sh_symbol">;</span>
<span className="sh_predef_func">Object</span><span className="sh_symbol">.</span><span className="sh_function">defineProperties</span><span className="sh_symbol">(</span>obj<span className="sh_symbol">,</span> <span className="sh_cbracket">{</span>
  <span className="sh_string">'foo'</span><span className="sh_symbol">:</span> <span className="sh_cbracket">{</span> value<span className="sh_symbol">:</span> <span className="sh_number">123</span><span className="sh_symbol">,</span> writable<span className="sh_symbol">:</span> <span className="sh_keyword">true</span><span className="sh_symbol">,</span> configurable<span className="sh_symbol">:</span> <span className="sh_keyword">true</span><span className="sh_symbol">,</span> enumerable<span className="sh_symbol">:</span> <span className="sh_keyword">true</span> <span className="sh_cbracket">}</span><span className="sh_symbol">,</span>
  <span className="sh_string">'bar'</span><span className="sh_symbol">:</span> <span className="sh_cbracket">{</span> value<span className="sh_symbol">:</span> <span className="sh_number">456</span><span className="sh_symbol">,</span> writable<span className="sh_symbol">:</span> <span className="sh_keyword">true</span><span className="sh_symbol">,</span> configurable<span className="sh_symbol">:</span> <span className="sh_keyword">true</span><span className="sh_symbol">,</span> enumerable<span className="sh_symbol">:</span> <span className="sh_keyword">true</span> <span className="sh_cbracket">}</span>
<span className="sh_cbracket">}</span><span className="sh_symbol">);</span>
</code></pre>
<p>The following is the approximate equivalent of the N-API counterpart:</p>
<pre className="sh_sourceCode"><code className="language-C">napi_status status <span className="sh_symbol">=</span> napi_status_generic_failure<span className="sh_symbol">;</span>
<span className="sh_comment">// const obj = {};</span>
napi_value obj<span className="sh_symbol">;</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_create_object</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>obj<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> status<span className="sh_symbol">;</span>
<span className="sh_comment">// Create napi_values for 123 and 456</span>
napi_value fooValue<span className="sh_symbol">,</span> barValue<span className="sh_symbol">;</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_create_int32</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_number">123</span><span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>fooValue<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> status<span className="sh_symbol">;</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_create_int32</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_number">456</span><span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>barValue<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> status<span className="sh_symbol">;</span>
<span className="sh_comment">// Set the properties</span>
napi_property_descriptor descriptors<span className="sh_symbol">[]</span> <span className="sh_symbol">=</span> <span className="sh_cbracket">{</span>
  <span className="sh_cbracket">{</span> <span className="sh_string">"foo"</span><span className="sh_symbol">,</span> NULL<span className="sh_symbol">,</span> NULL<span className="sh_symbol">,</span> NULL<span className="sh_symbol">,</span> NULL<span className="sh_symbol">,</span> fooValue<span className="sh_symbol">,</span> napi_default<span className="sh_symbol">,</span> NULL <span className="sh_cbracket">}</span><span className="sh_symbol">,</span>
  <span className="sh_cbracket">{</span> <span className="sh_string">"bar"</span><span className="sh_symbol">,</span> NULL<span className="sh_symbol">,</span> NULL<span className="sh_symbol">,</span> NULL<span className="sh_symbol">,</span> NULL<span className="sh_symbol">,</span> barValue<span className="sh_symbol">,</span> napi_default<span className="sh_symbol">,</span> NULL <span className="sh_cbracket">}</span>
<span className="sh_cbracket">}</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_define_properties</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span>
                                obj<span className="sh_symbol">,</span>
                                <span className="sh_function">sizeof</span><span className="sh_symbol">(</span>descriptors<span className="sh_symbol">)</span><span className="sh_normal"> </span><span className="sh_symbol">/</span> <span className="sh_function">sizeof</span><span className="sh_symbol">(</span>descriptors<span className="sh_symbol">[</span><span className="sh_number">0</span><span className="sh_symbol">]),</span>
                                descriptors<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> status<span className="sh_symbol">;</span>
</code></pre>
<h3>Structures<span><a className="mark" href="#n_api_structures" id="n_api_structures">#</a></span></h3>
<h4>napi_property_attributes<span><a className="mark" href="#n_api_napi_property_attributes" id="n_api_napi_property_attributes">#</a></span></h4>
<pre className="sh_sourceCode"><code className="language-C">typedef <span className="sh_keyword">enum</span> <span className="sh_cbracket">{</span>
  napi_default <span className="sh_symbol">=</span> <span className="sh_number">0</span><span className="sh_symbol">,</span>
  napi_writable <span className="sh_symbol">=</span> <span className="sh_number">1</span> <span className="sh_symbol">&lt;&lt;</span> <span className="sh_number">0</span><span className="sh_symbol">,</span>
  napi_enumerable <span className="sh_symbol">=</span> <span className="sh_number">1</span> <span className="sh_symbol">&lt;&lt;</span> <span className="sh_number">1</span><span className="sh_symbol">,</span>
  napi_configurable <span className="sh_symbol">=</span> <span className="sh_number">1</span> <span className="sh_symbol">&lt;&lt;</span> <span className="sh_number">2</span><span className="sh_symbol">,</span>
  <span className="sh_comment">// Used with napi_define_class to distinguish static properties</span>
  <span className="sh_comment">// from instance properties. Ignored by napi_define_properties.</span>
  napi_static <span className="sh_symbol">=</span> <span className="sh_number">1</span> <span className="sh_symbol">&lt;&lt;</span> <span className="sh_number">10</span><span className="sh_symbol">,</span>
<span className="sh_cbracket">}</span> napi_property_attributes<span className="sh_symbol">;</span>
</code></pre>
<p><code>napi_property_attributes</code> are flags used to control the behavior of properties
set on a JavaScript object. Other than <code>napi_static</code> they correspond to the
attributes listed in <a href="https://tc39.github.io/ecma262/#table-2">Section 6.1.7.1</a>
of the <a href="https://tc39.github.io/ecma262/">ECMAScript Language Specification</a>.
They can be one or more of the following bitflags:</p>
<ul>
<li><code>napi_default</code> - Used to indicate that no explicit attributes are set on the
given property. By default, a property is read only, not enumerable and not
configurable.</li>
<li><code>napi_writable</code> - Used to indicate that a given property is writable.</li>
<li><code>napi_enumerable</code> - Used to indicate that a given property is enumerable.</li>
<li><code>napi_configurable</code> - Used to indicate that a given property is configurable,
as defined in <a href="https://tc39.github.io/ecma262/#table-2">Section 6.1.7.1</a> of the <a href="https://tc39.github.io/ecma262/">ECMAScript Language Specification</a>.</li>
<li><code>napi_static</code> - Used to indicate that the property will be defined as
a static property on a class as opposed to an instance property, which is the
default. This is used only by <a href="#n_api_napi_define_class"><code>napi_define_class</code></a>. It is ignored by
<code>napi_define_properties</code>.</li>
</ul>
<h4>napi_property_descriptor<span><a className="mark" href="#n_api_napi_property_descriptor" id="n_api_napi_property_descriptor">#</a></span></h4>
<pre className="sh_sourceCode"><code className="language-C">typedef struct <span className="sh_cbracket">{</span>
  <span className="sh_comment">// One of utf8name or name should be NULL.</span>
  <span className="sh_keyword">const</span> char<span className="sh_symbol">*</span> utf8name<span className="sh_symbol">;</span>
  napi_value name<span className="sh_symbol">;</span>
  napi_callback method<span className="sh_symbol">;</span>
  napi_callback getter<span className="sh_symbol">;</span>
  napi_callback setter<span className="sh_symbol">;</span>
  napi_value value<span className="sh_symbol">;</span>
  napi_property_attributes attributes<span className="sh_symbol">;</span>
  void<span className="sh_symbol">*</span> data<span className="sh_symbol">;</span>
<span className="sh_cbracket">}</span> napi_property_descriptor<span className="sh_symbol">;</span>
</code></pre>
<ul>
<li><code>utf8name</code>: Optional <code>String</code> describing the key for the property,
encoded as UTF8. One of <code>utf8name</code> or <code>name</code> must be provided for the
property.</li>
<li><code>name</code>: Optional <code>napi_value</code> that points to a JavaScript string or symbol
to be used as the key for the property. One of <code>utf8name</code> or <code>name</code> must
be provided for the property.</li>
<li><code>value</code>: The value that's retrieved by a get access of the property if the
property is a data property. If this is passed in, set <code>getter</code>, <code>setter</code>,
<code>method</code> and <code>data</code> to <code>NULL</code> (since these members won't be used).</li>
<li><code>getter</code>: A function to call when a get access of the property is performed.
If this is passed in, set <code>value</code> and <code>method</code> to <code>NULL</code> (since these members
won't be used). The given function is called implicitly by the runtime when the
property is accessed from JavaScript code (or if a get on the property is
performed using a N-API call).</li>
<li><code>setter</code>: A function to call when a set access of the property is performed.
If this is passed in, set <code>value</code> and <code>method</code> to <code>NULL</code> (since these members
won't be used). The given function is called implicitly by the runtime when the
property is set from JavaScript code (or if a set on the property is
performed using a N-API call).</li>
<li><code>method</code>: Set this to make the property descriptor object's <code>value</code>
property to be a JavaScript function represented by <code>method</code>. If this is
passed in, set <code>value</code>, <code>getter</code> and <code>setter</code> to <code>NULL</code> (since these members
won't be used).</li>
<li><code>attributes</code>: The attributes associated with the particular property.
See <a href="#n_api_napi_property_attributes"><code>napi_property_attributes</code></a>.</li>
<li><code>data</code>: The callback data passed into <code>method</code>, <code>getter</code> and <code>setter</code> if
this function is invoked.</li>
</ul>
<h3>Functions<span><a className="mark" href="#n_api_functions" id="n_api_functions">#</a></span></h3>
<h4>napi_get_property_names<span><a className="mark" href="#n_api_napi_get_property_names" id="n_api_napi_get_property_names">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_property_names</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                    napi_value object<span className="sh_symbol">,</span>
                                    napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the N-API call is invoked under.</li>
<li><code>[in] object</code>: The object from which to retrieve the properties.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing an array of JavaScript values
that represent the property names of the object. The API can be used to
iterate over <code>result</code> using <a href="#n_api_napi_get_array_length"><code>napi_get_array_length</code></a>
and <a href="#n_api_napi_get_element"><code>napi_get_element</code></a>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API returns the names of the enumerable properties of <code>object</code> as an array
of strings. The properties of <code>object</code> whose key is a symbol will not be
included.</p>
<h4>napi_set_property<span><a className="mark" href="#n_api_napi_set_property" id="n_api_napi_set_property">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_set_property</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                              napi_value object<span className="sh_symbol">,</span>
                              napi_value key<span className="sh_symbol">,</span>
                              napi_value value<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the N-API call is invoked under.</li>
<li><code>[in] object</code>: The object on which to set the property.</li>
<li><code>[in] key</code>: The name of the property to set.</li>
<li><code>[in] value</code>: The property value.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API set a property on the <code>Object</code> passed in.</p>
<h4>napi_get_property<span><a className="mark" href="#n_api_napi_get_property" id="n_api_napi_get_property">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_property</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                              napi_value object<span className="sh_symbol">,</span>
                              napi_value key<span className="sh_symbol">,</span>
                              napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the N-API call is invoked under.</li>
<li><code>[in] object</code>: The object from which to retrieve the property.</li>
<li><code>[in] key</code>: The name of the property to retrieve.</li>
<li><code>[out] result</code>: The value of the property.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API gets the requested property from the <code>Object</code> passed in.</p>
<h4>napi_has_property<span><a className="mark" href="#n_api_napi_has_property" id="n_api_napi_has_property">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_has_property</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                              napi_value object<span className="sh_symbol">,</span>
                              napi_value key<span className="sh_symbol">,</span>
                              bool<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the N-API call is invoked under.</li>
<li><code>[in] object</code>: The object to query.</li>
<li><code>[in] key</code>: The name of the property whose existence to check.</li>
<li><code>[out] result</code>: Whether the property exists on the object or not.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API checks if the <code>Object</code> passed in has the named property.</p>
<h4>napi_delete_property<span><a className="mark" href="#n_api_napi_delete_property" id="n_api_napi_delete_property">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.2.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_delete_property</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                 napi_value object<span className="sh_symbol">,</span>
                                 napi_value key<span className="sh_symbol">,</span>
                                 bool<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the N-API call is invoked under.</li>
<li><code>[in] object</code>: The object to query.</li>
<li><code>[in] key</code>: The name of the property to delete.</li>
<li><code>[out] result</code>: Whether the property deletion succeeded or not. <code>result</code> can
optionally be ignored by passing <code>NULL</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API attempts to delete the <code>key</code> own property from <code>object</code>.</p>
<h4>napi_has_own_property<span><a className="mark" href="#n_api_napi_has_own_property" id="n_api_napi_has_own_property">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.2.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_has_own_property</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                  napi_value object<span className="sh_symbol">,</span>
                                  napi_value key<span className="sh_symbol">,</span>
                                  bool<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the N-API call is invoked under.</li>
<li><code>[in] object</code>: The object to query.</li>
<li><code>[in] key</code>: The name of the own property whose existence to check.</li>
<li><code>[out] result</code>: Whether the own property exists on the object or not.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API checks if the <code>Object</code> passed in has the named own property. <code>key</code> must
be a string or a <code>Symbol</code>, or an error will be thrown. N-API will not perform
any conversion between data types.</p>
<h4>napi_set_named_property<span><a className="mark" href="#n_api_napi_set_named_property" id="n_api_napi_set_named_property">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_set_named_property</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                    napi_value object<span className="sh_symbol">,</span>
                                    <span className="sh_keyword">const</span> char<span className="sh_symbol">*</span> utf8Name<span className="sh_symbol">,</span>
                                    napi_value value<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the N-API call is invoked under.</li>
<li><code>[in] object</code>: The object on which to set the property.</li>
<li><code>[in] utf8Name</code>: The name of the property to set.</li>
<li><code>[in] value</code>: The property value.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This method is equivalent to calling <a href="#n_api_napi_set_property"><code>napi_set_property</code></a> with a <code>napi_value</code>
created from the string passed in as <code>utf8Name</code>.</p>
<h4>napi_get_named_property<span><a className="mark" href="#n_api_napi_get_named_property" id="n_api_napi_get_named_property">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_named_property</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                    napi_value object<span className="sh_symbol">,</span>
                                    <span className="sh_keyword">const</span> char<span className="sh_symbol">*</span> utf8Name<span className="sh_symbol">,</span>
                                    napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the N-API call is invoked under.</li>
<li><code>[in] object</code>: The object from which to retrieve the property.</li>
<li><code>[in] utf8Name</code>: The name of the property to get.</li>
<li><code>[out] result</code>: The value of the property.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This method is equivalent to calling <a href="#n_api_napi_get_property"><code>napi_get_property</code></a> with a <code>napi_value</code>
created from the string passed in as <code>utf8Name</code>.</p>
<h4>napi_has_named_property<span><a className="mark" href="#n_api_napi_has_named_property" id="n_api_napi_has_named_property">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_has_named_property</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                    napi_value object<span className="sh_symbol">,</span>
                                    <span className="sh_keyword">const</span> char<span className="sh_symbol">*</span> utf8Name<span className="sh_symbol">,</span>
                                    bool<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the N-API call is invoked under.</li>
<li><code>[in] object</code>: The object to query.</li>
<li><code>[in] utf8Name</code>: The name of the property whose existence to check.</li>
<li><code>[out] result</code>: Whether the property exists on the object or not.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This method is equivalent to calling <a href="#n_api_napi_has_property"><code>napi_has_property</code></a> with a <code>napi_value</code>
created from the string passed in as <code>utf8Name</code>.</p>
<h4>napi_set_element<span><a className="mark" href="#n_api_napi_set_element" id="n_api_napi_set_element">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_set_element</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                             napi_value object<span className="sh_symbol">,</span>
                             uint32_t index<span className="sh_symbol">,</span>
                             napi_value value<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the N-API call is invoked under.</li>
<li><code>[in] object</code>: The object from which to set the properties.</li>
<li><code>[in] index</code>: The index of the property to set.</li>
<li><code>[in] value</code>: The property value.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API sets and element on the <code>Object</code> passed in.</p>
<h4>napi_get_element<span><a className="mark" href="#n_api_napi_get_element" id="n_api_napi_get_element">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_element</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                             napi_value object<span className="sh_symbol">,</span>
                             uint32_t index<span className="sh_symbol">,</span>
                             napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the N-API call is invoked under.</li>
<li><code>[in] object</code>: The object from which to retrieve the property.</li>
<li><code>[in] index</code>: The index of the property to get.</li>
<li><code>[out] result</code>: The value of the property.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API gets the element at the requested index.</p>
<h4>napi_has_element<span><a className="mark" href="#n_api_napi_has_element" id="n_api_napi_has_element">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_has_element</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                             napi_value object<span className="sh_symbol">,</span>
                             uint32_t index<span className="sh_symbol">,</span>
                             bool<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the N-API call is invoked under.</li>
<li><code>[in] object</code>: The object to query.</li>
<li><code>[in] index</code>: The index of the property whose existence to check.</li>
<li><code>[out] result</code>: Whether the property exists on the object or not.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API returns if the <code>Object</code> passed in has an element at the
requested index.</p>
<h4>napi_delete_element<span><a className="mark" href="#n_api_napi_delete_element" id="n_api_napi_delete_element">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.2.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_delete_element</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                napi_value object<span className="sh_symbol">,</span>
                                uint32_t index<span className="sh_symbol">,</span>
                                bool<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the N-API call is invoked under.</li>
<li><code>[in] object</code>: The object to query.</li>
<li><code>[in] index</code>: The index of the property to delete.</li>
<li><code>[out] result</code>: Whether the element deletion succeeded or not. <code>result</code> can
optionally be ignored by passing <code>NULL</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API attempts to delete the specified <code>index</code> from <code>object</code>.</p>
<h4>napi_define_properties<span><a className="mark" href="#n_api_napi_define_properties" id="n_api_napi_define_properties">#</a></span></h4>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_define_properties</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                   napi_value object<span className="sh_symbol">,</span>
                                   size_t property_count<span className="sh_symbol">,</span>
                                   <span className="sh_keyword">const</span> napi_property_descriptor<span className="sh_symbol">*</span> properties<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the N-API call is invoked under.</li>
<li><code>[in] object</code>: The object from which to retrieve the properties.</li>
<li><code>[in] property_count</code>: The number of elements in the <code>properties</code> array.</li>
<li><code>[in] properties</code>: The array of property descriptors.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This method allows the efficient definition of multiple properties on a given
object. The properties are defined using property descriptors (see
<a href="#n_api_napi_property_descriptor"><code>napi_property_descriptor</code></a>). Given an array of such property descriptors,
this API will set the properties on the object one at a time, as defined by
<code>DefineOwnProperty()</code> (described in <a href="https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots-defineownproperty-p-desc">Section 9.1.6</a> of the ECMA262
specification).</p>
<h2>Working with JavaScript Functions<span><a className="mark" href="#n_api_working_with_javascript_functions" id="n_api_working_with_javascript_functions">#</a></span></h2>
<p>N-API provides a set of APIs that allow JavaScript code to
call back into native code. N-API APIs that support calling back
into native code take in a callback functions represented by
the <code>napi_callback</code> type. When the JavaScript VM calls back to
native code, the <code>napi_callback</code> function provided is invoked. The APIs
documented in this section allow the callback function to do the
following:</p>
<ul>
<li>Get information about the context in which the callback was invoked.</li>
<li>Get the arguments passed into the callback.</li>
<li>Return a <code>napi_value</code> back from the callback.</li>
</ul>
<p>Additionally, N-API provides a set of functions which allow calling
JavaScript functions from native code. One can either call a function
like a regular JavaScript function call, or as a constructor
function.</p>
<p>Any non-<code>NULL</code> data which is passed to this API via the <code>data</code> field of the
<code>napi_property_descriptor</code> items can be associated with <code>object</code> and freed
whenever <code>object</code> is garbage-collected by passing both <code>object</code> and the data to
<a href="#n_api_napi_add_finalizer"><code>napi_add_finalizer</code></a>.</p>
<h3>napi_call_function<span><a className="mark" href="#n_api_napi_call_function" id="n_api_napi_call_function">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_call_function</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                               napi_value recv<span className="sh_symbol">,</span>
                               napi_value func<span className="sh_symbol">,</span>
                               int argc<span className="sh_symbol">,</span>
                               <span className="sh_keyword">const</span> napi_value<span className="sh_symbol">*</span> argv<span className="sh_symbol">,</span>
                               napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] recv</code>: The <code>this</code> object passed to the called function.</li>
<li><code>[in] func</code>: <code>napi_value</code> representing the JavaScript function
to be invoked.</li>
<li><code>[in] argc</code>: The count of elements in the <code>argv</code> array.</li>
<li><code>[in] argv</code>: Array of <code>napi_values</code> representing JavaScript values passed
in as arguments to the function.</li>
<li><code>[out] result</code>: <code>napi_value</code> representing the JavaScript object returned.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This method allows a JavaScript function object to be called from a native
add-on. This is the primary mechanism of calling back <em>from</em> the add-on's
native code <em>into</em> JavaScript. For the special case of calling into JavaScript
after an async operation, see <a href="#n_api_napi_make_callback"><code>napi_make_callback</code></a>.</p>
<p>A sample use case might look as follows. Consider the following JavaScript
snippet:</p>
<pre className="sh_sourceCode"><code className="language-js"><span className="sh_keyword">function</span> <span className="sh_function">AddTwo</span><span className="sh_symbol">(</span>num<span className="sh_symbol">)</span> <span className="sh_cbracket">{</span>
  <span className="sh_keyword">return</span> num <span className="sh_symbol">+</span> <span className="sh_number">2</span><span className="sh_symbol">;</span>
<span className="sh_cbracket">}</span>
</code></pre>
<p>Then, the above function can be invoked from a native add-on using the
following code:</p>
<pre className="sh_sourceCode"><code className="language-C"><span className="sh_comment">// Get the function named "AddTwo" on the global object</span>
napi_value global<span className="sh_symbol">,</span> add_two<span className="sh_symbol">,</span> arg<span className="sh_symbol">;</span>
napi_status status <span className="sh_symbol">=</span> <span className="sh_function">napi_get_global</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>global<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span><span className="sh_symbol">;</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_get_named_property</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> global<span className="sh_symbol">,</span> <span className="sh_string">"AddTwo"</span><span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>add_two<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span><span className="sh_symbol">;</span>
<span className="sh_comment">// const arg = 1337</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_create_int32</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_number">1337</span><span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>arg<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span><span className="sh_symbol">;</span>
napi_value<span className="sh_symbol">*</span> argv <span className="sh_symbol">=</span> <span className="sh_symbol">&amp;</span>arg<span className="sh_symbol">;</span>
size_t argc <span className="sh_symbol">=</span> <span className="sh_number">1</span><span className="sh_symbol">;</span>
<span className="sh_comment">// AddTwo(arg);</span>
napi_value return_val<span className="sh_symbol">;</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_call_function</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> global<span className="sh_symbol">,</span> add_two<span className="sh_symbol">,</span> argc<span className="sh_symbol">,</span> argv<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>return_val<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span><span className="sh_symbol">;</span>
<span className="sh_comment">// Convert the result back to a native type</span>
int32_t result<span className="sh_symbol">;</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_get_value_int32</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> return_val<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>result<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span><span className="sh_symbol">;</span>
</code></pre>
<h3>napi_create_function<span><a className="mark" href="#n_api_napi_create_function" id="n_api_napi_create_function">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_function</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                 <span className="sh_keyword">const</span> char<span className="sh_symbol">*</span> utf8name<span className="sh_symbol">,</span>
                                 size_t length<span className="sh_symbol">,</span>
                                 napi_callback cb<span className="sh_symbol">,</span>
                                 void<span className="sh_symbol">*</span> data<span className="sh_symbol">,</span>
                                 napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] utf8Name</code>: The name of the function encoded as UTF8. This is visible
within JavaScript as the new function object's <code>name</code> property.</li>
<li><code>[in] length</code>: The length of the <code>utf8name</code> in bytes, or
<code>NAPI_AUTO_LENGTH</code> if it is null-terminated.</li>
<li><code>[in] cb</code>: The native function which should be called when this function
object is invoked.</li>
<li><code>[in] data</code>: User-provided data context. This will be passed back into the
function when invoked later.</li>
<li><code>[out] result</code>: <code>napi_value</code> representing the JavaScript function object for
the newly created function.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API allows an add-on author to create a function object in native code.
This is the primary mechanism to allow calling <em>into</em> the add-on's native code
<em>from</em> JavaScript.</p>
<p>The newly created function is not automatically visible from script after this
call. Instead, a property must be explicitly set on any object that is visible
to JavaScript, in order for the function to be accessible from script.</p>
<p>In order to expose a function as part of the
add-on's module exports, set the newly created function on the exports
object. A sample module might look as follows:</p>
<pre className="sh_sourceCode"><code className="language-C">napi_value <span className="sh_function">SayHello</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_callback_info info<span className="sh_symbol">)</span> <span className="sh_cbracket">{</span>
  <span className="sh_function">printf</span><span className="sh_symbol">(</span><span className="sh_string">"Hello</span><span className="sh_specialchar">\n</span><span className="sh_string">"</span><span className="sh_symbol">);</span>
  <span className="sh_keyword">return</span> NULL<span className="sh_symbol">;</span>
<span className="sh_cbracket">}</span>
napi_value <span className="sh_function">Init</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_value exports<span className="sh_symbol">)</span> <span className="sh_cbracket">{</span>
  napi_status status<span className="sh_symbol">;</span>
  napi_value fn<span className="sh_symbol">;</span>
  status <span className="sh_symbol">=</span> <span className="sh_function">napi_create_function</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> NULL<span className="sh_symbol">,</span> <span className="sh_number">0</span><span className="sh_symbol">,</span> SayHello<span className="sh_symbol">,</span> NULL<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>fn<span className="sh_symbol">);</span>
  <span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> NULL<span className="sh_symbol">;</span>
  status <span className="sh_symbol">=</span> <span className="sh_function">napi_set_named_property</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> exports<span className="sh_symbol">,</span> <span className="sh_string">"sayHello"</span><span className="sh_symbol">,</span> fn<span className="sh_symbol">);</span>
  <span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> NULL<span className="sh_symbol">;</span>
  <span className="sh_keyword">return</span> exports<span className="sh_symbol">;</span>
<span className="sh_cbracket">}</span>
<span className="sh_function">NAPI_MODULE</span><span className="sh_symbol">(</span>NODE_GYP_MODULE_NAME<span className="sh_symbol">,</span> Init<span className="sh_symbol">)</span>
</code></pre>
<p>Given the above code, the add-on can be used from JavaScript as follows:</p>
<pre className="sh_sourceCode"><code className="language-js"><span className="sh_keyword">const</span> myaddon <span className="sh_symbol">=</span> <span className="sh_function">require</span><span className="sh_symbol">(</span><span className="sh_string">'./addon'</span><span className="sh_symbol">);</span>
myaddon<span className="sh_symbol">.</span><span className="sh_function">sayHello</span><span className="sh_symbol">();</span>
</code></pre>
<p>The string passed to <code>require()</code> is the name of the target in <code>binding.gyp</code>
responsible for creating the <code>.node</code> file.</p>
<p>Any non-<code>NULL</code> data which is passed to this API via the <code>data</code> parameter can
be associated with the resulting JavaScript function (which is returned in the
<code>result</code> parameter) and freed whenever the function is garbage-collected by
passing both the JavaScript function and the data to <a href="#n_api_napi_add_finalizer"><code>napi_add_finalizer</code></a>.</p>
<p>JavaScript <code>Function</code>s are described in
<a href="https://tc39.github.io/ecma262/#sec-function-objects">Section 19.2</a>
of the ECMAScript Language Specification.</p>
<h3>napi_get_cb_info<span><a className="mark" href="#n_api_napi_get_cb_info" id="n_api_napi_get_cb_info">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_cb_info</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                             napi_callback_info cbinfo<span className="sh_symbol">,</span>
                             size_t<span className="sh_symbol">*</span> argc<span className="sh_symbol">,</span>
                             napi_value<span className="sh_symbol">*</span> argv<span className="sh_symbol">,</span>
                             napi_value<span className="sh_symbol">*</span> thisArg<span className="sh_symbol">,</span>
                             void<span className="sh_symbol">**</span> data<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] cbinfo</code>: The callback info passed into the callback function.</li>
<li><code>[in-out] argc</code>: Specifies the size of the provided <code>argv</code> array
and receives the actual count of arguments.</li>
<li><code>[out] argv</code>: Buffer to which the <code>napi_value</code> representing the
arguments are copied. If there are more arguments than the provided
count, only the requested number of arguments are copied. If there are fewer
arguments provided than claimed, the rest of <code>argv</code> is filled with <code>napi_value</code>
values that represent <code>undefined</code>.</li>
<li><code>[out] this</code>: Receives the JavaScript <code>this</code> argument for the call.</li>
<li><code>[out] data</code>: Receives the data pointer for the callback.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This method is used within a callback function to retrieve details about the
call like the arguments and the <code>this</code> pointer from a given callback info.</p>
<h3>napi_get_new_target<span><a className="mark" href="#n_api_napi_get_new_target" id="n_api_napi_get_new_target">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.6.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_new_target</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                napi_callback_info cbinfo<span className="sh_symbol">,</span>
                                napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] cbinfo</code>: The callback info passed into the callback function.</li>
<li><code>[out] result</code>: The <code>new.target</code> of the constructor call.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API returns the <code>new.target</code> of the constructor call. If the current
callback is not a constructor call, the result is <code>NULL</code>.</p>
<h3>napi_new_instance<span><a className="mark" href="#n_api_napi_new_instance" id="n_api_napi_new_instance">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_new_instance</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                              napi_value cons<span className="sh_symbol">,</span>
                              size_t argc<span className="sh_symbol">,</span>
                              napi_value<span className="sh_symbol">*</span> argv<span className="sh_symbol">,</span>
                              napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] cons</code>: <code>napi_value</code> representing the JavaScript function
to be invoked as a constructor.</li>
<li><code>[in] argc</code>: The count of elements in the <code>argv</code> array.</li>
<li><code>[in] argv</code>: Array of JavaScript values as <code>napi_value</code>
representing the arguments to the constructor.</li>
<li><code>[out] result</code>: <code>napi_value</code> representing the JavaScript object returned,
which in this case is the constructed object.</li>
</ul>
<p>This method is used to instantiate a new JavaScript value using a given
<code>napi_value</code> that represents the constructor for the object. For example,
consider the following snippet:</p>
<pre className="sh_sourceCode"><code className="language-js"><span className="sh_keyword">function</span> <span className="sh_function">MyObject</span><span className="sh_symbol">(</span>param<span className="sh_symbol">)</span> <span className="sh_cbracket">{</span>
  <span className="sh_keyword">this</span><span className="sh_symbol">.</span>param <span className="sh_symbol">=</span> param<span className="sh_symbol">;</span>
<span className="sh_cbracket">}</span>
<span className="sh_keyword">const</span> arg <span className="sh_symbol">=</span> <span className="sh_string">'hello'</span><span className="sh_symbol">;</span>
<span className="sh_keyword">const</span> value <span className="sh_symbol">=</span> <span className="sh_keyword">new</span> <span className="sh_function">MyObject</span><span className="sh_symbol">(</span>arg<span className="sh_symbol">);</span>
</code></pre>
<p>The following can be approximated in N-API using the following snippet:</p>
<pre className="sh_sourceCode"><code className="language-C"><span className="sh_comment">// Get the constructor function MyObject</span>
napi_value global<span className="sh_symbol">,</span> constructor<span className="sh_symbol">,</span> arg<span className="sh_symbol">,</span> value<span className="sh_symbol">;</span>
napi_status status <span className="sh_symbol">=</span> <span className="sh_function">napi_get_global</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>global<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span><span className="sh_symbol">;</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_get_named_property</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> global<span className="sh_symbol">,</span> <span className="sh_string">"MyObject"</span><span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>constructor<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span><span className="sh_symbol">;</span>
<span className="sh_comment">// const arg = "hello"</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_create_string_utf8</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_string">"hello"</span><span className="sh_symbol">,</span> NAPI_AUTO_LENGTH<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>arg<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span><span className="sh_symbol">;</span>
napi_value<span className="sh_symbol">*</span> argv <span className="sh_symbol">=</span> <span className="sh_symbol">&amp;</span>arg<span className="sh_symbol">;</span>
size_t argc <span className="sh_symbol">=</span> <span className="sh_number">1</span><span className="sh_symbol">;</span>
<span className="sh_comment">// const value = new MyObject(arg)</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_new_instance</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> constructor<span className="sh_symbol">,</span> argc<span className="sh_symbol">,</span> argv<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>value<span className="sh_symbol">);</span>
</code></pre>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<h2>Object Wrap<span><a className="mark" href="#n_api_object_wrap" id="n_api_object_wrap">#</a></span></h2>
<p>N-API offers a way to "wrap" C++ classes and instances so that the class
constructor and methods can be called from JavaScript.</p>
<ol>
<li>The <a href="#n_api_napi_define_class"><code>napi_define_class</code></a> API defines a JavaScript class with constructor,
static properties and methods, and instance properties and methods that
correspond to the C++ class.</li>
<li>When JavaScript code invokes the constructor, the constructor callback
uses <a href="#n_api_napi_wrap"><code>napi_wrap</code></a> to wrap a new C++ instance in a JavaScript object,
then returns the wrapper object.</li>
<li>When JavaScript code invokes a method or property accessor on the class,
the corresponding <code>napi_callback</code> C++ function is invoked. For an instance
callback, <a href="#n_api_napi_unwrap"><code>napi_unwrap</code></a> obtains the C++ instance that is the target of
the call.</li>
</ol>
<p>For wrapped objects it may be difficult to distinguish between a function
called on a class prototype and a function called on an instance of a class.
A common pattern used to address this problem is to save a persistent
reference to the class constructor for later <code>instanceof</code> checks.</p>
<pre className="sh_sourceCode"><code className="language-C">napi_value MyClass_constructor <span className="sh_symbol">=</span> NULL<span className="sh_symbol">;</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_get_reference_value</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> MyClass<span className="sh_symbol">::</span>es_constructor<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>MyClass_constructor<span className="sh_symbol">);</span>
<span className="sh_function">assert</span><span className="sh_symbol">(</span>napi_ok <span className="sh_symbol">==</span> status<span className="sh_symbol">);</span>
bool is_instance <span className="sh_symbol">=</span> <span className="sh_keyword">false</span><span className="sh_symbol">;</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_instanceof</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> es_this<span className="sh_symbol">,</span> MyClass_constructor<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>is_instance<span className="sh_symbol">);</span>
<span className="sh_function">assert</span><span className="sh_symbol">(</span>napi_ok <span className="sh_symbol">==</span> status<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>is_instance<span className="sh_symbol">)</span> <span className="sh_cbracket">{</span>
  <span className="sh_comment">// napi_unwrap() ...</span>
<span className="sh_cbracket">}</span> <span className="sh_keyword">else</span> <span className="sh_cbracket">{</span>
  <span className="sh_comment">// otherwise...</span>
<span className="sh_cbracket">}</span>
</code></pre>
<p>The reference must be freed once it is no longer needed.</p>
<h3>napi_define_class<span><a className="mark" href="#n_api_napi_define_class" id="n_api_napi_define_class">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_define_class</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                              <span className="sh_keyword">const</span> char<span className="sh_symbol">*</span> utf8name<span className="sh_symbol">,</span>
                              size_t length<span className="sh_symbol">,</span>
                              napi_callback constructor<span className="sh_symbol">,</span>
                              void<span className="sh_symbol">*</span> data<span className="sh_symbol">,</span>
                              size_t property_count<span className="sh_symbol">,</span>
                              <span className="sh_keyword">const</span> napi_property_descriptor<span className="sh_symbol">*</span> properties<span className="sh_symbol">,</span>
                              napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] utf8name</code>: Name of the JavaScript constructor function; this is
not required to be the same as the C++ class name, though it is recommended
for clarity.</li>
<li><code>[in] length</code>: The length of the <code>utf8name</code> in bytes, or <code>NAPI_AUTO_LENGTH</code>
if it is null-terminated.</li>
<li><code>[in] constructor</code>: Callback function that handles constructing instances
of the class. (This should be a static method on the class, not an actual
C++ constructor function.)</li>
<li><code>[in] data</code>: Optional data to be passed to the constructor callback as
the <code>data</code> property of the callback info.</li>
<li><code>[in] property_count</code>: Number of items in the <code>properties</code> array argument.</li>
<li><code>[in] properties</code>: Array of property descriptors describing static and
instance data properties, accessors, and methods on the class
See <code>napi_property_descriptor</code>.</li>
<li><code>[out] result</code>: A <code>napi_value</code> representing the constructor function for
the class.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>Defines a JavaScript class that corresponds to a C++ class, including:</p>
<ul>
<li>A JavaScript constructor function that has the class name and invokes the
provided C++ constructor callback.</li>
<li>Properties on the constructor function corresponding to <em>static</em> data
properties, accessors, and methods of the C++ class (defined by
property descriptors with the <code>napi_static</code> attribute).</li>
<li>Properties on the constructor function's <code>prototype</code> object corresponding to
<em>non-static</em> data properties, accessors, and methods of the C++ class
(defined by property descriptors without the <code>napi_static</code> attribute).</li>
</ul>
<p>The C++ constructor callback should be a static method on the class that calls
the actual class constructor, then wraps the new C++ instance in a JavaScript
object, and returns the wrapper object. See <code>napi_wrap()</code> for details.</p>
<p>The JavaScript constructor function returned from <a href="#n_api_napi_define_class"><code>napi_define_class</code></a> is
often saved and used later, to construct new instances of the class from native
code, and/or check whether provided values are instances of the class. In that
case, to prevent the function value from being garbage-collected, create a
persistent reference to it using <a href="#n_api_napi_create_reference"><code>napi_create_reference</code></a> and ensure the
reference count is kept &gt;= 1.</p>
<p>Any non-<code>NULL</code> data which is passed to this API via the <code>data</code> parameter or via
the <code>data</code> field of the <code>napi_property_descriptor</code> array items can be associated
with the resulting JavaScript constructor (which is returned in the <code>result</code>
parameter) and freed whenever the class is garbage-collected by passing both
the JavaScript function and the data to <a href="#n_api_napi_add_finalizer"><code>napi_add_finalizer</code></a>.</p>
<h3>napi_wrap<span><a className="mark" href="#n_api_napi_wrap" id="n_api_napi_wrap">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_wrap</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                      napi_value js_object<span className="sh_symbol">,</span>
                      void<span className="sh_symbol">*</span> native_object<span className="sh_symbol">,</span>
                      napi_finalize finalize_cb<span className="sh_symbol">,</span>
                      void<span className="sh_symbol">*</span> finalize_hint<span className="sh_symbol">,</span>
                      napi_ref<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] js_object</code>: The JavaScript object that will be the wrapper for the
native object.</li>
<li><code>[in] native_object</code>: The native instance that will be wrapped in the
JavaScript object.</li>
<li><code>[in] finalize_cb</code>: Optional native callback that can be used to free the
native instance when the JavaScript object is ready for garbage-collection.</li>
<li><code>[in] finalize_hint</code>: Optional contextual hint that is passed to the
finalize callback.</li>
<li><code>[out] result</code>: Optional reference to the wrapped object.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>Wraps a native instance in a JavaScript object. The native instance can be
retrieved later using <code>napi_unwrap()</code>.</p>
<p>When JavaScript code invokes a constructor for a class that was defined using
<code>napi_define_class()</code>, the <code>napi_callback</code> for the constructor is invoked.
After constructing an instance of the native class, the callback must then call
<code>napi_wrap()</code> to wrap the newly constructed instance in the already-created
JavaScript object that is the <code>this</code> argument to the constructor callback.
(That <code>this</code> object was created from the constructor function's <code>prototype</code>,
so it already has definitions of all the instance properties and methods.)</p>
<p>Typically when wrapping a class instance, a finalize callback should be
provided that simply deletes the native instance that is received as the <code>data</code>
argument to the finalize callback.</p>
<p>The optional returned reference is initially a weak reference, meaning it
has a reference count of 0. Typically this reference count would be incremented
temporarily during async operations that require the instance to remain valid.</p>
<p><em>Caution</em>: The optional returned reference (if obtained) should be deleted via
<a href="#n_api_napi_delete_reference"><code>napi_delete_reference</code></a> ONLY in response to the finalize callback
invocation. If it is deleted before then, then the finalize callback may never
be invoked. Therefore, when obtaining a reference a finalize callback is also
required in order to enable correct disposal of the reference.</p>
<p>Calling <code>napi_wrap()</code> a second time on an object will return an error. To
associate another native instance with the object, use <code>napi_remove_wrap()</code>
first.</p>
<h3>napi_unwrap<span><a className="mark" href="#n_api_napi_unwrap" id="n_api_napi_unwrap">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_unwrap</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                        napi_value js_object<span className="sh_symbol">,</span>
                        void<span className="sh_symbol">**</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] js_object</code>: The object associated with the native instance.</li>
<li><code>[out] result</code>: Pointer to the wrapped native instance.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>Retrieves a native instance that was previously wrapped in a JavaScript
object using <code>napi_wrap()</code>.</p>
<p>When JavaScript code invokes a method or property accessor on the class, the
corresponding <code>napi_callback</code> is invoked. If the callback is for an instance
method or accessor, then the <code>this</code> argument to the callback is the wrapper
object; the wrapped C++ instance that is the target of the call can be obtained
then by calling <code>napi_unwrap()</code> on the wrapper object.</p>
<h3>napi_remove_wrap<span><a className="mark" href="#n_api_napi_remove_wrap" id="n_api_napi_remove_wrap">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.5.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_remove_wrap</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                             napi_value js_object<span className="sh_symbol">,</span>
                             void<span className="sh_symbol">**</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] js_object</code>: The object associated with the native instance.</li>
<li><code>[out] result</code>: Pointer to the wrapped native instance.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>Retrieves a native instance that was previously wrapped in the JavaScript
object <code>js_object</code> using <code>napi_wrap()</code> and removes the wrapping. If a finalize
callback was associated with the wrapping, it will no longer be called when the
JavaScript object becomes garbage-collected.</p>
<h3>napi_add_finalizer<span><a className="mark" href="#n_api_napi_add_finalizer" id="n_api_napi_add_finalizer">#</a></span></h3>
<p></p><div className="api_stability api_stability_1"><a href="documentation.html#documentation_stability_index">Stability: 1</a> - Experimental</div><p></p>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_add_finalizer</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                               napi_value js_object<span className="sh_symbol">,</span>
                               void<span className="sh_symbol">*</span> native_object<span className="sh_symbol">,</span>
                               napi_finalize finalize_cb<span className="sh_symbol">,</span>
                               void<span className="sh_symbol">*</span> finalize_hint<span className="sh_symbol">,</span>
                               napi_ref<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] js_object</code>: The JavaScript object to which the native data will be
attached.</li>
<li><code>[in] native_object</code>: The native data that will be attached to the JavaScript
object.</li>
<li><code>[in] finalize_cb</code>: Native callback that will be used to free the
native data when the JavaScript object is ready for garbage-collection.</li>
<li><code>[in] finalize_hint</code>: Optional contextual hint that is passed to the
finalize callback.</li>
<li><code>[out] result</code>: Optional reference to the JavaScript object.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>Adds a <code>napi_finalize</code> callback which will be called when the JavaScript object
in <code>js_object</code> is ready for garbage collection. This API is similar to
<code>napi_wrap()</code> except that</p>
<ul>
<li>the native data cannot be retrieved later using <code>napi_unwrap()</code>,</li>
<li>nor can it be removed later using <code>napi_remove_wrap()</code>, and</li>
<li>the API can be called multiple times with different data items in order to
attach each of them to the JavaScript object.</li>
</ul>
<p><em>Caution</em>: The optional returned reference (if obtained) should be deleted via
<a href="#n_api_napi_delete_reference"><code>napi_delete_reference</code></a> ONLY in response to the finalize callback
invocation. If it is deleted before then, then the finalize callback may never
be invoked. Therefore, when obtaining a reference a finalize callback is also
required in order to enable correct disposal of the reference.</p>
<h2>Simple Asynchronous Operations<span><a className="mark" href="#n_api_simple_asynchronous_operations" id="n_api_simple_asynchronous_operations">#</a></span></h2>
<p>Addon modules often need to leverage async helpers from libuv as part of their
implementation. This allows them to schedule work to be executed asynchronously
so that their methods can return in advance of the work being completed. This
is important in order to allow them to avoid blocking overall execution
of the Node.js application.</p>
<p>N-API provides an ABI-stable interface for these
supporting functions which covers the most common asynchronous use cases.</p>
<p>N-API defines the <code>napi_work</code> structure which is used to manage
asynchronous workers. Instances are created/deleted with
<a href="#n_api_napi_create_async_work"><code>napi_create_async_work</code></a> and <a href="#n_api_napi_delete_async_work"><code>napi_delete_async_work</code></a>.</p>
<p>The <code>execute</code> and <code>complete</code> callbacks are functions that will be
invoked when the executor is ready to execute and when it completes its
task respectively.</p>
<p>The <code>execute</code> function should avoid making any N-API calls
that could result in the execution of JavaScript or interaction with
JavaScript objects. Most often, any code that needs to make N-API
calls should be made in <code>complete</code> callback instead.</p>
<p>These functions implement the following interfaces:</p>
<pre className="sh_sourceCode"><code className="language-C">typedef <span className="sh_function">void</span> <span className="sh_symbol">(*</span>napi_async_execute_callback<span className="sh_symbol">)(</span>napi_env env<span className="sh_symbol">,</span>
                                            void<span className="sh_symbol">*</span> data<span className="sh_symbol">);</span>
typedef <span className="sh_function">void</span> <span className="sh_symbol">(*</span>napi_async_complete_callback<span className="sh_symbol">)(</span>napi_env env<span className="sh_symbol">,</span>
                                             napi_status status<span className="sh_symbol">,</span>
                                             void<span className="sh_symbol">*</span> data<span className="sh_symbol">);</span>
</code></pre>
<p>When these methods are invoked, the <code>data</code> parameter passed will be the
addon-provided <code>void*</code> data that was passed into the
<code>napi_create_async_work</code> call.</p>
<p>Once created the async worker can be queued
for execution using the <a href="#n_api_napi_queue_async_work"><code>napi_queue_async_work</code></a> function:</p>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_queue_async_work</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                  napi_async_work work<span className="sh_symbol">);</span>
</code></pre>
<p><a href="#n_api_napi_cancel_async_work"><code>napi_cancel_async_work</code></a> can be used if the work needs
to be cancelled before the work has started execution.</p>
<p>After calling <a href="#n_api_napi_cancel_async_work"><code>napi_cancel_async_work</code></a>, the <code>complete</code> callback
will be invoked with a status value of <code>napi_cancelled</code>.
The work should not be deleted before the <code>complete</code>
callback invocation, even when it was cancelled.</p>
<h3>napi_create_async_work<span><a className="mark" href="#n_api_napi_create_async_work" id="n_api_napi_create_async_work">#</a></span></h3>
<div className="api_metadata">
<details className="changelog"><summary>History</summary>
<table>
<tbody><tr><th>Version</th><th>Changes</th></tr>
<tr><td>v8.6.0</td>
<td><p>Added <code>async_resource</code> and <code>async_resource_name</code> parameters.</p></td></tr>
<tr><td>v8.0.0</td>
<td><p><span>Added in: v8.0.0</span></p></td></tr>
</tbody></table>
</details>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_async_work</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                   napi_value async_resource<span className="sh_symbol">,</span>
                                   napi_value async_resource_name<span className="sh_symbol">,</span>
                                   napi_async_execute_callback execute<span className="sh_symbol">,</span>
                                   napi_async_complete_callback complete<span className="sh_symbol">,</span>
                                   void<span className="sh_symbol">*</span> data<span className="sh_symbol">,</span>
                                   napi_async_work<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] async_resource</code>: An optional object associated with the async work
that will be passed to possible <code>async_hooks</code> <a href="async_hooks.html#async_hooks_init_asyncid_type_triggerasyncid_resource"><code>init</code> hooks</a>.</li>
<li><code>[in] async_resource_name</code>: Identifier for the kind of resource that is
being provided for diagnostic information exposed by the <code>async_hooks</code> API.</li>
<li><code>[in] execute</code>: The native function which should be called to execute
the logic asynchronously. The given function is called from a worker pool
thread and can execute in parallel with the main event loop thread.</li>
<li><code>[in] complete</code>: The native function which will be called when the
asynchronous logic is completed or is cancelled. The given function is called
from the main event loop thread.</li>
<li><code>[in] data</code>: User-provided data context. This will be passed back into the
execute and complete functions.</li>
<li><code>[out] result</code>: <code>napi_async_work*</code> which is the handle to the newly created
async work.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API allocates a work object that is used to execute logic asynchronously.
It should be freed using <a href="#n_api_napi_delete_async_work"><code>napi_delete_async_work</code></a> once the work is no longer
required.</p>
<p><code>async_resource_name</code> should be a null-terminated, UTF-8-encoded string.</p>
<p>The <code>async_resource_name</code> identifier is provided by the user and should be
representative of the type of async work being performed. It is also recommended
to apply namespacing to the identifier, e.g. by including the module name. See
the <a href="async_hooks.html#async_hooks_type"><code>async_hooks</code> documentation</a> for more information.</p>
<h3>napi_delete_async_work<span><a className="mark" href="#n_api_napi_delete_async_work" id="n_api_napi_delete_async_work">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_delete_async_work</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                   napi_async_work work<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] work</code>: The handle returned by the call to <code>napi_create_async_work</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API frees a previously allocated work object.</p>
<p>This API can be called even if there is a pending JavaScript exception.</p>
<h3>napi_queue_async_work<span><a className="mark" href="#n_api_napi_queue_async_work" id="n_api_napi_queue_async_work">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_queue_async_work</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                  napi_async_work work<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] work</code>: The handle returned by the call to <code>napi_create_async_work</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API requests that the previously allocated work be scheduled
for execution.</p>
<h3>napi_cancel_async_work<span><a className="mark" href="#n_api_napi_cancel_async_work" id="n_api_napi_cancel_async_work">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_cancel_async_work</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                   napi_async_work work<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] work</code>: The handle returned by the call to <code>napi_create_async_work</code>.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API cancels queued work if it has not yet
been started. If it has already started executing, it cannot be
cancelled and <code>napi_generic_failure</code> will be returned. If successful,
the <code>complete</code> callback will be invoked with a status value of
<code>napi_cancelled</code>. The work should not be deleted before the <code>complete</code>
callback invocation, even if it has been successfully cancelled.</p>
<p>This API can be called even if there is a pending JavaScript exception.</p>
<h2>Custom Asynchronous Operations<span><a className="mark" href="#n_api_custom_asynchronous_operations" id="n_api_custom_asynchronous_operations">#</a></span></h2>
<p>The simple asynchronous work APIs above may not be appropriate for every
scenario. When using any other asynchronous mechanism, the following APIs
are necessary to ensure an asynchronous operation is properly tracked by
the runtime.</p>
<h3>napi_async_init<span><a className="mark" href="#n_api_napi_async_init" id="n_api_napi_async_init">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.6.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_async_init</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                            napi_value async_resource<span className="sh_symbol">,</span>
                            napi_value async_resource_name<span className="sh_symbol">,</span>
                            napi_async_context<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] async_resource</code>: An optional object associated with the async work
that will be passed to possible <code>async_hooks</code> <a href="async_hooks.html#async_hooks_init_asyncid_type_triggerasyncid_resource"><code>init</code> hooks</a>.</li>
<li><code>[in] async_resource_name</code>: Identifier for the kind of resource
that is being provided for diagnostic information exposed by the
<code>async_hooks</code> API.</li>
<li><code>[out] result</code>: The initialized async context.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<h3>napi_async_destroy<span><a className="mark" href="#n_api_napi_async_destroy" id="n_api_napi_async_destroy">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.6.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_async_destroy</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                               napi_async_context async_context<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] async_context</code>: The async context to be destroyed.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API can be called even if there is a pending JavaScript exception.</p>
<h3>napi_make_callback<span><a className="mark" href="#n_api_napi_make_callback" id="n_api_napi_make_callback">#</a></span></h3>
<div className="api_metadata">
<details className="changelog"><summary>History</summary>
<table>
<tbody><tr><th>Version</th><th>Changes</th></tr>
<tr><td>v8.6.0</td>
<td><p>Added <code>async_context</code> parameter.</p></td></tr>
<tr><td>v8.0.0</td>
<td><p><span>Added in: v8.0.0</span></p></td></tr>
</tbody></table>
</details>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_make_callback</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                               napi_async_context async_context<span className="sh_symbol">,</span>
                               napi_value recv<span className="sh_symbol">,</span>
                               napi_value func<span className="sh_symbol">,</span>
                               int argc<span className="sh_symbol">,</span>
                               <span className="sh_keyword">const</span> napi_value<span className="sh_symbol">*</span> argv<span className="sh_symbol">,</span>
                               napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] async_context</code>: Context for the async operation that is
invoking the callback. This should normally be a value previously
obtained from <a href="#n_api_napi_async_init"><code>napi_async_init</code></a>. However <code>NULL</code> is also allowed,
which indicates the current async context (if any) is to be used
for the callback.</li>
<li><code>[in] recv</code>: The <code>this</code> object passed to the called function.</li>
<li><code>[in] func</code>: <code>napi_value</code> representing the JavaScript function
to be invoked.</li>
<li><code>[in] argc</code>: The count of elements in the <code>argv</code> array.</li>
<li><code>[in] argv</code>: Array of JavaScript values as <code>napi_value</code>
representing the arguments to the function.</li>
<li><code>[out] result</code>: <code>napi_value</code> representing the JavaScript object returned.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This method allows a JavaScript function object to be called from a native
add-on. This API is similar to <code>napi_call_function</code>. However, it is used to call
<em>from</em> native code back <em>into</em> JavaScript <em>after</em> returning from an async
operation (when there is no other script on the stack). It is a fairly simple
wrapper around <code>node::MakeCallback</code>.</p>
<p>Note it is <em>not</em> necessary to use <code>napi_make_callback</code> from within a
<code>napi_async_complete_callback</code>; in that situation the callback's async
context has already been set up, so a direct call to <code>napi_call_function</code>
is sufficient and appropriate. Use of the <code>napi_make_callback</code> function
may be required when implementing custom async behavior that does not use
<code>napi_create_async_work</code>.</p>
<h3>napi_open_callback_scope<span><a className="mark" href="#n_api_napi_open_callback_scope" id="n_api_napi_open_callback_scope">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v9.6.0</span>
<span>N-API version: 3</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status <span className="sh_function">napi_open_callback_scope</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                                 napi_value resource_object<span className="sh_symbol">,</span>
                                                 napi_async_context context<span className="sh_symbol">,</span>
                                                 napi_callback_scope<span className="sh_symbol">*</span> result<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] resource_object</code>: An object associated with the async work
that will be passed to possible <code>async_hooks</code> <a href="async_hooks.html#async_hooks_init_asyncid_type_triggerasyncid_resource"><code>init</code> hooks</a>.</li>
<li><code>[in] context</code>: Context for the async operation that is
invoking the callback. This should be a value previously obtained
from <a href="#n_api_napi_async_init"><code>napi_async_init</code></a>.</li>
<li><code>[out] result</code>: The newly created scope.</li>
</ul>
<p>There are cases (for example, resolving promises) where it is
necessary to have the equivalent of the scope associated with a callback
in place when making certain N-API calls. If there is no other script on
the stack the <a href="#n_api_napi_open_callback_scope"><code>napi_open_callback_scope</code></a> and
<a href="#n_api_napi_close_callback_scope"><code>napi_close_callback_scope</code></a> functions can be used to open/close
the required scope.</p>
<h3>napi_close_callback_scope<span><a className="mark" href="#n_api_napi_close_callback_scope" id="n_api_napi_close_callback_scope">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v9.6.0</span>
<span>N-API version: 3</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status <span className="sh_function">napi_close_callback_scope</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                                  napi_callback_scope scope<span className="sh_symbol">)</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] scope</code>: The scope to be closed.</li>
</ul>
<p>This API can be called even if there is a pending JavaScript exception.</p>
<h2>Version Management<span><a className="mark" href="#n_api_version_management" id="n_api_version_management">#</a></span></h2>
<h3>napi_get_node_version<span><a className="mark" href="#n_api_napi_get_node_version" id="n_api_napi_get_node_version">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.4.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">typedef struct <span className="sh_cbracket">{</span>
  uint32_t major<span className="sh_symbol">;</span>
  uint32_t minor<span className="sh_symbol">;</span>
  uint32_t patch<span className="sh_symbol">;</span>
  <span className="sh_keyword">const</span> char<span className="sh_symbol">*</span> release<span className="sh_symbol">;</span>
<span className="sh_cbracket">}</span> napi_node_version<span className="sh_symbol">;</span>
napi_status <span className="sh_function">napi_get_node_version</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                  <span className="sh_keyword">const</span> napi_node_version<span className="sh_symbol">**</span> version<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[out] version</code>: A pointer to version information for Node.js itself.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This function fills the <code>version</code> struct with the major, minor, and patch
version of Node.js that is currently running, and the <code>release</code> field with the
value of <a href="process.html#process_process_release"><code>process.release.name</code></a>.</p>
<p>The returned buffer is statically allocated and does not need to be freed.</p>
<h3>napi_get_version<span><a className="mark" href="#n_api_napi_get_version" id="n_api_napi_get_version">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.0.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_get_version</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                             uint32_t<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[out] result</code>: The highest version of N-API supported.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API returns the highest N-API version supported by the
Node.js runtime. N-API is planned to be additive such that
newer releases of Node.js may support additional API functions.
In order to allow an addon to use a newer function when running with
versions of Node.js that support it, while providing
fallback behavior when running with Node.js versions that don't
support it:</p>
<ul>
<li>Call <code>napi_get_version()</code> to determine if the API is available.</li>
<li>If available, dynamically load a pointer to the function using <code>uv_dlsym()</code>.</li>
<li>Use the dynamically loaded pointer to invoke the function.</li>
<li>If the function is not available, provide an alternate implementation
that does not use the function.</li>
</ul>
<h2>Memory Management<span><a className="mark" href="#n_api_memory_management" id="n_api_memory_management">#</a></span></h2>
<h3>napi_adjust_external_memory<span><a className="mark" href="#n_api_napi_adjust_external_memory" id="n_api_napi_adjust_external_memory">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.5.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status <span className="sh_function">napi_adjust_external_memory</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                                    int64_t change_in_bytes<span className="sh_symbol">,</span>
                                                    int64_t<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] change_in_bytes</code>: The change in externally allocated memory that is
kept alive by JavaScript objects.</li>
<li><code>[out] result</code>: The adjusted value</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This function gives V8 an indication of the amount of externally allocated
memory that is kept alive by JavaScript objects (i.e. a JavaScript object
that points to its own memory allocated by a native module). Registering
externally allocated memory will trigger global garbage collections more
often than it would otherwise.</p>
{/* it's very convenient to have all the anchors indexed */}
{/*lint disable no-unused-definitions remark-lint*/}
<h2>Promises<span><a className="mark" href="#n_api_promises" id="n_api_promises">#</a></span></h2>
<p>N-API provides facilities for creating <code>Promise</code> objects as described in
<a href="https://tc39.github.io/ecma262/#sec-promise-objects">Section 25.4</a> of the ECMA specification. It implements promises as a pair of
objects. When a promise is created by <code>napi_create_promise()</code>, a "deferred"
object is created and returned alongside the <code>Promise</code>. The deferred object is
bound to the created <code>Promise</code> and is the only means to resolve or reject the
<code>Promise</code> using <code>napi_resolve_deferred()</code> or <code>napi_reject_deferred()</code>. The
deferred object that is created by <code>napi_create_promise()</code> is freed by
<code>napi_resolve_deferred()</code> or <code>napi_reject_deferred()</code>. The <code>Promise</code> object may
be returned to JavaScript where it can be used in the usual fashion.</p>
<p>For example, to create a promise and pass it to an asynchronous worker:</p>
<pre className="sh_sourceCode"><code className="language-c">napi_deferred deferred<span className="sh_symbol">;</span>
napi_value promise<span className="sh_symbol">;</span>
napi_status status<span className="sh_symbol">;</span>
<span className="sh_comment">// Create the promise.</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_create_promise</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>deferred<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span>promise<span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> NULL<span className="sh_symbol">;</span>
<span className="sh_comment">// Pass the deferred to a function that performs an asynchronous action.</span>
<span className="sh_function">do_something_asynchronous</span><span className="sh_symbol">(</span>deferred<span className="sh_symbol">);</span>
<span className="sh_comment">// Return the promise to JS</span>
<span className="sh_keyword">return</span> promise<span className="sh_symbol">;</span>
</code></pre>
<p>The above function <code>do_something_asynchronous()</code> would perform its asynchronous
action and then it would resolve or reject the deferred, thereby concluding the
promise and freeing the deferred:</p>
<pre className="sh_sourceCode"><code className="language-c">napi_deferred deferred<span className="sh_symbol">;</span>
napi_value <span className="sh_predef_var">undefined</span><span className="sh_symbol">;</span>
napi_status status<span className="sh_symbol">;</span>
<span className="sh_comment">// Create a value with which to conclude the deferred.</span>
status <span className="sh_symbol">=</span> <span className="sh_function">napi_get_undefined</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> <span className="sh_symbol">&amp;</span><span className="sh_predef_var">undefined</span><span className="sh_symbol">);</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> NULL<span className="sh_symbol">;</span>
<span className="sh_comment">// Resolve or reject the promise associated with the deferred depending on</span>
<span className="sh_comment">// whether the asynchronous action succeeded.</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>asynchronous_action_succeeded<span className="sh_symbol">)</span> <span className="sh_cbracket">{</span>
  status <span className="sh_symbol">=</span> <span className="sh_function">napi_resolve_deferred</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> deferred<span className="sh_symbol">,</span> <span className="sh_predef_var">undefined</span><span className="sh_symbol">);</span>
<span className="sh_cbracket">}</span> <span className="sh_keyword">else</span> <span className="sh_cbracket">{</span>
  status <span className="sh_symbol">=</span> <span className="sh_function">napi_reject_deferred</span><span className="sh_symbol">(</span>env<span className="sh_symbol">,</span> deferred<span className="sh_symbol">,</span> <span className="sh_predef_var">undefined</span><span className="sh_symbol">);</span>
<span className="sh_cbracket">}</span>
<span className="sh_keyword">if</span> <span className="sh_symbol">(</span>status <span className="sh_symbol">!=</span> napi_ok<span className="sh_symbol">)</span> <span className="sh_keyword">return</span> NULL<span className="sh_symbol">;</span>
<span className="sh_comment">// At this point the deferred has been freed, so we should assign NULL to it.</span>
deferred <span className="sh_symbol">=</span> NULL<span className="sh_symbol">;</span>
</code></pre>
<h3>napi_create_promise<span><a className="mark" href="#n_api_napi_create_promise" id="n_api_napi_create_promise">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.5.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_create_promise</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                napi_deferred<span className="sh_symbol">*</span> deferred<span className="sh_symbol">,</span>
                                napi_value<span className="sh_symbol">*</span> promise<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[out] deferred</code>: A newly created deferred object which can later be passed to
<code>napi_resolve_deferred()</code> or <code>napi_reject_deferred()</code> to resolve resp. reject
the associated promise.</li>
<li><code>[out] promise</code>: The JavaScript promise associated with the deferred object.</li>
</ul>
<p>Returns <code>napi_ok</code> if the API succeeded.</p>
<p>This API creates a deferred object and a JavaScript promise.</p>
<h3>napi_resolve_deferred<span><a className="mark" href="#n_api_napi_resolve_deferred" id="n_api_napi_resolve_deferred">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.5.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_resolve_deferred</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                  napi_deferred deferred<span className="sh_symbol">,</span>
                                  napi_value resolution<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] deferred</code>: The deferred object whose associated promise to resolve.</li>
<li><code>[in] resolution</code>: The value with which to resolve the promise.</li>
</ul>
<p>This API resolves a JavaScript promise by way of the deferred object
with which it is associated. Thus, it can only be used to resolve JavaScript
promises for which the corresponding deferred object is available. This
effectively means that the promise must have been created using
<code>napi_create_promise()</code> and the deferred object returned from that call must
have been retained in order to be passed to this API.</p>
<p>The deferred object is freed upon successful completion.</p>
<h3>napi_reject_deferred<span><a className="mark" href="#n_api_napi_reject_deferred" id="n_api_napi_reject_deferred">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.5.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_reject_deferred</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                 napi_deferred deferred<span className="sh_symbol">,</span>
                                 napi_value rejection<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] deferred</code>: The deferred object whose associated promise to resolve.</li>
<li><code>[in] rejection</code>: The value with which to reject the promise.</li>
</ul>
<p>This API rejects a JavaScript promise by way of the deferred object
with which it is associated. Thus, it can only be used to reject JavaScript
promises for which the corresponding deferred object is available. This
effectively means that the promise must have been created using
<code>napi_create_promise()</code> and the deferred object returned from that call must
have been retained in order to be passed to this API.</p>
<p>The deferred object is freed upon successful completion.</p>
<h3>napi_is_promise<span><a className="mark" href="#n_api_napi_is_promise" id="n_api_napi_is_promise">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.5.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">napi_status <span className="sh_function">napi_is_promise</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                            napi_value promise<span className="sh_symbol">,</span>
                            bool<span className="sh_symbol">*</span> is_promise<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] promise</code>: The promise to examine</li>
<li><code>[out] is_promise</code>: Flag indicating whether <code>promise</code> is a native promise
object - that is, a promise object created by the underlying engine.</li>
</ul>
<h2>Script execution<span><a className="mark" href="#n_api_script_execution" id="n_api_script_execution">#</a></span></h2>
<p>N-API provides an API for executing a string containing JavaScript using the
underlying JavaScript engine.</p>
<h3>napi_run_script<span><a className="mark" href="#n_api_napi_run_script" id="n_api_napi_run_script">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.5.0</span>
<span>N-API version: 1</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status <span className="sh_function">napi_run_script</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                        napi_value script<span className="sh_symbol">,</span>
                                        napi_value<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] script</code>: A JavaScript string containing the script to execute.</li>
<li><code>[out] result</code>: The value resulting from having executed the script.</li>
</ul>
<h2>libuv event loop<span><a className="mark" href="#n_api_libuv_event_loop" id="n_api_libuv_event_loop">#</a></span></h2>
<p>N-API provides a function for getting the current event loop associated with
a specific <code>napi_env</code>.</p>
<h3>napi_get_uv_event_loop<span><a className="mark" href="#n_api_napi_get_uv_event_loop" id="n_api_napi_get_uv_event_loop">#</a></span></h3>
<div className="api_metadata">
<span>Added in: v8.10.0, v9.3.0</span>
<span>N-API version: 2</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status <span className="sh_function">napi_get_uv_event_loop</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                               uv_loop_t<span className="sh_symbol">**</span> loop<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[out] loop</code>: The current libuv loop instance.</li>
</ul>
{/* it's very convenient to have all the anchors indexed */}
{/*lint disable no-unused-definitions remark-lint*/}
<h2>Asynchronous Thread-safe Function Calls<span><a className="mark" href="#n_api_asynchronous_thread_safe_function_calls" id="n_api_asynchronous_thread_safe_function_calls">#</a></span></h2>
<p></p><div className="api_stability api_stability_1"><a href="documentation.html#documentation_stability_index">Stability: 1</a> - Experimental</div><p></p>
<p>JavaScript functions can normally only be called from a native addon's main
thread. If an addon creates additional threads, then N-API functions that
require a <code>napi_env</code>, <code>napi_value</code>, or <code>napi_ref</code> must not be called from those
threads.</p>
<p>When an addon has additional threads and JavaScript functions need to be invoked
based on the processing completed by those threads, those threads must
communicate with the addon's main thread so that the main thread can invoke the
JavaScript function on their behalf. The thread-safe function APIs provide an
easy way to do this.</p>
<p>These APIs provide the type <code>napi_threadsafe_function</code> as well as APIs to
create, destroy, and call objects of this type.
<code>napi_create_threadsafe_function()</code> creates a persistent reference to a
<code>napi_value</code> that holds a JavaScript function which can be called from multiple
threads. The calls happen asynchronously. This means that values with which the
JavaScript callback is to be called will be placed in a queue, and, for each
value in the queue, a call will eventually be made to the JavaScript function.</p>
<p>Upon creation of a <code>napi_threadsafe_function</code> a <code>napi_finalize</code> callback can be
provided. This callback will be invoked on the main thread when the thread-safe
function is about to be destroyed. It receives the context and the finalize data
given during construction, and provides an opportunity for cleaning up after the
threads e.g. by calling <code>uv_thread_join()</code>. <strong>It is important that, aside from
the main loop thread, there be no threads left using the thread-safe function
after the finalize callback completes.</strong></p>
<p>The <code>context</code> given during the call to <code>napi_create_threadsafe_function()</code> can
be retrieved from any thread with a call to
<code>napi_get_threadsafe_function_context()</code>.</p>
<p><code>napi_call_threadsafe_function()</code> can then be used for initiating a call into
JavaScript. <code>napi_call_threadsafe_function()</code> accepts a parameter which controls
whether the API behaves blockingly. If set to <code>napi_tsfn_nonblocking</code>, the API
behaves non-blockingly, returning <code>napi_queue_full</code> if the queue was full,
preventing data from being successfully added to the queue. If set to
<code>napi_tsfn_blocking</code>, the API blocks until space becomes available in the queue.
<code>napi_call_threadsafe_function()</code> never blocks if the thread-safe function was
created with a maximum queue size of 0.</p>
<p>The actual call into JavaScript is controlled by the callback given via the
<code>call_js_cb</code> parameter. <code>call_js_cb</code> is invoked on the main thread once for each
value that was placed into the queue by a successful call to
<code>napi_call_threadsafe_function()</code>. If such a callback is not given, a default
callback will be used, and the resulting JavaScript call will have no arguments.
The <code>call_js_cb</code> callback receives the JavaScript function to call as a
<code>napi_value</code> in its parameters, as well as the <code>void*</code> context pointer used when
creating the <code>napi_threadsafe_function</code>, and the next data pointer that was
created by one of the secondary threads. The callback can then use an API such
as <code>napi_call_function()</code> to call into JavaScript.</p>
<p>The callback may also be invoked with <code>env</code> and <code>call_js_cb</code> both set to <code>NULL</code>
to indicate that calls into JavaScript are no longer possible, while items
remain in the queue that may need to be freed. This normally occurs when the
Node.js process exits while there is a thread-safe function still active.</p>
<p>It is not necessary to call into JavaScript via <code>napi_make_callback()</code> because
N-API runs <code>call_js_cb</code> in a context appropriate for callbacks.</p>
<p>Threads can be added to and removed from a <code>napi_threadsafe_function</code> object
during its existence. Thus, in addition to specifying an initial number of
threads upon creation, <code>napi_acquire_threadsafe_function</code> can be called to
indicate that a new thread will start making use of the thread-safe function.
Similarly, <code>napi_release_threadsafe_function</code> can be called to indicate that an
existing thread will stop making use of the thread-safe function.</p>
<p><code>napi_threadsafe_function</code> objects are destroyed when every thread which uses
the object has called <code>napi_release_threadsafe_function()</code> or has received a
return status of <code>napi_closing</code> in response to a call to
<code>napi_call_threadsafe_function</code>. The queue is emptied before the
<code>napi_threadsafe_function</code> is destroyed. It is important that
<code>napi_release_threadsafe_function()</code> be the last API call made in conjunction
with a given <code>napi_threadsafe_function</code>, because after the call completes, there
is no guarantee that the <code>napi_threadsafe_function</code> is still allocated. For the
same reason it is also important that no more use be made of a thread-safe
function after receiving a return value of <code>napi_closing</code> in response to a call
to <code>napi_call_threadsafe_function</code>. Data associated with the
<code>napi_threadsafe_function</code> can be freed in its <code>napi_finalize</code> callback which
was passed to <code>napi_create_threadsafe_function()</code>.</p>
<p>Once the number of threads making use of a <code>napi_threadsafe_function</code> reaches
zero, no further threads can start making use of it by calling
<code>napi_acquire_threadsafe_function()</code>. In fact, all subsequent API calls
associated with it, except <code>napi_release_threadsafe_function()</code>, will return an
error value of <code>napi_closing</code>.</p>
<p>The thread-safe function can be "aborted" by giving a value of <code>napi_tsfn_abort</code>
to <code>napi_release_threadsafe_function()</code>. This will cause all subsequent APIs
associated with the thread-safe function except
<code>napi_release_threadsafe_function()</code> to return <code>napi_closing</code> even before its
reference count reaches zero. In particular, <code>napi_call_threadsafe_function()</code>
will return <code>napi_closing</code>, thus informing the threads that it is no longer
possible to make asynchronous calls to the thread-safe function. This can be
used as a criterion for terminating the thread. <strong>Upon receiving a return value
of <code>napi_closing</code> from <code>napi_call_threadsafe_function()</code> a thread must make no
further use of the thread-safe function because it is no longer guaranteed to
be allocated.</strong></p>
<p>Similarly to libuv handles, thread-safe functions can be "referenced" and
"unreferenced". A "referenced" thread-safe function will cause the event loop on
the thread on which it is created to remain alive until the thread-safe function
is destroyed. In contrast, an "unreferenced" thread-safe function will not
prevent the event loop from exiting. The APIs <code>napi_ref_threadsafe_function</code> and
<code>napi_unref_threadsafe_function</code> exist for this purpose.</p>
<h3>napi_create_threadsafe_function<span><a className="mark" href="#n_api_napi_create_threadsafe_function" id="n_api_napi_create_threadsafe_function">#</a></span></h3>
<p></p><div className="api_stability api_stability_2"><a href="documentation.html#documentation_stability_index">Stability: 2</a> - Stable</div><p></p>
<div className="api_metadata">
<span>Added in: v10.6.0</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status
<span className="sh_function">napi_create_threadsafe_function</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span>
                                napi_value func<span className="sh_symbol">,</span>
                                napi_value async_resource<span className="sh_symbol">,</span>
                                napi_value async_resource_name<span className="sh_symbol">,</span>
                                size_t max_queue_size<span className="sh_symbol">,</span>
                                size_t initial_thread_count<span className="sh_symbol">,</span>
                                void<span className="sh_symbol">*</span> thread_finalize_data<span className="sh_symbol">,</span>
                                napi_finalize thread_finalize_cb<span className="sh_symbol">,</span>
                                void<span className="sh_symbol">*</span> context<span className="sh_symbol">,</span>
                                napi_threadsafe_function_call_js call_js_cb<span className="sh_symbol">,</span>
                                napi_threadsafe_function<span className="sh_symbol">*</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] func</code>: The JavaScript function to call from another thread.</li>
<li><code>[in] async_resource</code>: An optional object associated with the async work that
will be passed to possible <code>async_hooks</code> <a href="async_hooks.html#async_hooks_init_asyncid_type_triggerasyncid_resource"><code>init</code> hooks</a>.</li>
<li><code>[in] async_resource_name</code>: A JavaScript string to provide an identifier for
the kind of resource that is being provided for diagnostic information exposed
by the <code>async_hooks</code> API.</li>
<li><code>[in] max_queue_size</code>: Maximum size of the queue. <code>0</code> for no limit.</li>
<li><code>[in] initial_thread_count</code>: The initial number of threads, including the main
thread, which will be making use of this function.</li>
<li><code>[in] thread_finalize_data</code>: Optional data to be passed to <code>thread_finalize_cb</code>.</li>
<li><code>[in] thread_finalize_cb</code>: Optional function to call when the
<code>napi_threadsafe_function</code> is being destroyed.</li>
<li><code>[in] context</code>: Optional data to attach to the resulting
<code>napi_threadsafe_function</code>.</li>
<li><code>[in] call_js_cb</code>: Optional callback which calls the JavaScript function in
response to a call on a different thread. This callback will be called on the
main thread. If not given, the JavaScript function will be called with no
parameters and with <code>undefined</code> as its <code>this</code> value.</li>
<li><code>[out] result</code>: The asynchronous thread-safe JavaScript function.</li>
</ul>
<h3>napi_get_threadsafe_function_context<span><a className="mark" href="#n_api_napi_get_threadsafe_function_context" id="n_api_napi_get_threadsafe_function_context">#</a></span></h3>
<p></p><div className="api_stability api_stability_2"><a href="documentation.html#documentation_stability_index">Stability: 2</a> - Stable</div><p></p>
<div className="api_metadata">
<span>Added in: v10.6.0</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status
<span className="sh_function">napi_get_threadsafe_function_context</span><span className="sh_symbol">(</span>napi_threadsafe_function func<span className="sh_symbol">,</span>
                                     void<span className="sh_symbol">**</span> result<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] func</code>: The thread-safe function for which to retrieve the context.</li>
<li><code>[out] result</code>: The location where to store the context.</li>
</ul>
<p>This API may be called from any thread which makes use of <code>func</code>.</p>
<h3>napi_call_threadsafe_function<span><a className="mark" href="#n_api_napi_call_threadsafe_function" id="n_api_napi_call_threadsafe_function">#</a></span></h3>
<p></p><div className="api_stability api_stability_2"><a href="documentation.html#documentation_stability_index">Stability: 2</a> - Stable</div><p></p>
<div className="api_metadata">
<span>Added in: v10.6.0</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status
<span className="sh_function">napi_call_threadsafe_function</span><span className="sh_symbol">(</span>napi_threadsafe_function func<span className="sh_symbol">,</span>
                              void<span className="sh_symbol">*</span> data<span className="sh_symbol">,</span>
                              napi_threadsafe_function_call_mode is_blocking<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] func</code>: The asynchronous thread-safe JavaScript function to invoke.</li>
<li><code>[in] data</code>: Data to send into JavaScript via the callback <code>call_js_cb</code>
provided during the creation of the thread-safe JavaScript function.</li>
<li><code>[in] is_blocking</code>: Flag whose value can be either <code>napi_tsfn_blocking</code> to
indicate that the call should block if the queue is full or
<code>napi_tsfn_nonblocking</code> to indicate that the call should return immediately with
a status of <code>napi_queue_full</code> whenever the queue is full.</li>
</ul>
<p>This API will return <code>napi_closing</code> if <code>napi_release_threadsafe_function()</code> was
called with <code>abort</code> set to <code>napi_tsfn_abort</code> from any thread. The value is only
added to the queue if the API returns <code>napi_ok</code>.</p>
<p>This API may be called from any thread which makes use of <code>func</code>.</p>
<h3>napi_acquire_threadsafe_function<span><a className="mark" href="#n_api_napi_acquire_threadsafe_function" id="n_api_napi_acquire_threadsafe_function">#</a></span></h3>
<p></p><div className="api_stability api_stability_2"><a href="documentation.html#documentation_stability_index">Stability: 2</a> - Stable</div><p></p>
<div className="api_metadata">
<span>Added in: v10.6.0</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status
<span className="sh_function">napi_acquire_threadsafe_function</span><span className="sh_symbol">(</span>napi_threadsafe_function func<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] func</code>: The asynchronous thread-safe JavaScript function to start making
use of.</li>
</ul>
<p>A thread should call this API before passing <code>func</code> to any other thread-safe
function APIs to indicate that it will be making use of <code>func</code>. This prevents
<code>func</code> from being destroyed when all other threads have stopped making use of
it.</p>
<p>This API may be called from any thread which will start making use of <code>func</code>.</p>
<h3>napi_release_threadsafe_function<span><a className="mark" href="#n_api_napi_release_threadsafe_function" id="n_api_napi_release_threadsafe_function">#</a></span></h3>
<p></p><div className="api_stability api_stability_2"><a href="documentation.html#documentation_stability_index">Stability: 2</a> - Stable</div><p></p>
<div className="api_metadata">
<span>Added in: v10.6.0</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status
<span className="sh_function">napi_release_threadsafe_function</span><span className="sh_symbol">(</span>napi_threadsafe_function func<span className="sh_symbol">,</span>
                                 napi_threadsafe_function_release_mode mode<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] func</code>: The asynchronous thread-safe JavaScript function whose reference
count to decrement.</li>
<li><code>[in] mode</code>: Flag whose value can be either <code>napi_tsfn_release</code> to indicate
that the current thread will make no further calls to the thread-safe function,
or <code>napi_tsfn_abort</code> to indicate that in addition to the current thread, no
other thread should make any further calls to the thread-safe function. If set
to <code>napi_tsfn_abort</code>, further calls to <code>napi_call_threadsafe_function()</code> will
return <code>napi_closing</code>, and no further values will be placed in the queue.</li>
</ul>
<p>A thread should call this API when it stops making use of <code>func</code>. Passing <code>func</code>
to any thread-safe APIs after having called this API has undefined results, as
<code>func</code> may have been destroyed.</p>
<p>This API may be called from any thread which will stop making use of <code>func</code>.</p>
<h3>napi_ref_threadsafe_function<span><a className="mark" href="#n_api_napi_ref_threadsafe_function" id="n_api_napi_ref_threadsafe_function">#</a></span></h3>
<p></p><div className="api_stability api_stability_2"><a href="documentation.html#documentation_stability_index">Stability: 2</a> - Stable</div><p></p>
<div className="api_metadata">
<span>Added in: v10.6.0</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status
<span className="sh_function">napi_ref_threadsafe_function</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_threadsafe_function func<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] func</code>: The thread-safe function to reference.</li>
</ul>
<p>This API is used to indicate that the event loop running on the main thread
should not exit until <code>func</code> has been destroyed. Similar to <a href="http://docs.libuv.org/en/v1.x/handle.html#c.uv_ref"><code>uv_ref</code></a> it is
also idempotent.</p>
<p>This API may only be called from the main thread.</p>
<h3>napi_unref_threadsafe_function<span><a className="mark" href="#n_api_napi_unref_threadsafe_function" id="n_api_napi_unref_threadsafe_function">#</a></span></h3>
<p></p><div className="api_stability api_stability_2"><a href="documentation.html#documentation_stability_index">Stability: 2</a> - Stable</div><p></p>
<div className="api_metadata">
<span>Added in: v10.6.0</span>
</div>
<pre className="sh_sourceCode"><code className="language-C">NAPI_EXTERN napi_status
<span className="sh_function">napi_unref_threadsafe_function</span><span className="sh_symbol">(</span>napi_env env<span className="sh_symbol">,</span> napi_threadsafe_function func<span className="sh_symbol">);</span>
</code></pre>
<ul>
<li><code>[in] env</code>: The environment that the API is invoked under.</li>
<li><code>[in] func</code>: The thread-safe function to unreference.</li>
</ul>
<p>This API is used to indicate that the event loop running on the main thread
may exit before <code>func</code> is destroyed. Similar to <a href="http://docs.libuv.org/en/v1.x/handle.html#c.uv_unref"><code>uv_unref</code></a> it is also
idempotent.</p>
<p>This API may only be called from the main thread.</p>
      </div>
    </div>
  </div>
  <script src="assets/sh_main.js"></script>
  <script src="assets/sh_javascript.min.js"></script>
  <script>highlight(undefined, undefined, 'pre');</script>
</body></html>
</div>
);
}
}
export default YourComponent;
